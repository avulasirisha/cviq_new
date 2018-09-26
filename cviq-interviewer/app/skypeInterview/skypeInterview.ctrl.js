angular.module('Cviq').controller('skypeInterviewCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$state','socket','questions', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $state, socket, questions){

    $scope.interviewData = JSON.parse(localStorage.getItem('StartInterviewDetails'));
    console.log('Skype Interview', $scope.interviewData);

    /*=============================Start: Get Interviewer Profile Function ================================*/

    $http({
        method:'GET',
        url: CONSTANT.apiUrl + '/api/interviewer/getInterviewerProfileDetails',
        headers:{
            authorization: $cookieStore.get('AccessToken')
        }
    })
        .success(function(response){
            $scope.interviewerData = response.data;
            console.log('$scope.interviewerData', $scope.interviewerData);
        })
        .error(function(response){
            console.log(response);
            if(response.statusCode == 401){
                $rootScope.sessionExpired();
            }
        })

    /*=============================End: Get Interviewer Profile Function ================================*/

    //var apiKey = '45643282',
    //    sessionId = '2_MX40NTY0MzI4Mn5-MTQ3MjEwMzU4ODYxN35EaStlVW14WjZwNmZwb3k5MlUyUTRpSTd-fg',
    //    token = 'T1==cGFydG5lcl9pZD00NTY0MzI4MiZzaWc9NjFmMjJkOTU1N2JmOGZiZjcyZTViZGZhZjcyMTlmMzdiNTljNTgzZTpzZXNzaW9uX2lkPTJfTVg0ME5UWTBNekk0TW41LU1UUTNNakV3TXpVNE9EWXhOMzVFYVN0bFZXMTRXalp3Tm1ad2IzazVNbFV5VVRScFNUZC1mZyZjcmVhdGVfdGltZT0xNDcyMTAzNjE3Jm5vbmNlPTAuMzg2ODM4ODA3MDI1OTI0MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDcyMTI1Nzcy';
    //
    //var SAMPLE_SERVER_BASE_URL = 'https://localhost:8000';
    //
    //
    //
    //$(document).ready(function() {
    //    // Make an Ajax request to get the OpenTok API key, session ID, and token from the server
    //    $.get(SAMPLE_SERVER_BASE_URL + '/session', function(res) {
    //        apiKey = res.apiKey;
    //        sessionId = res.sessionId;
    //        token = res.token;
    //
    //        initializeSession();
    //    });
    //});
    //
    //function initializeSession() {
    //    var session = OT.initSession(apiKey, sessionId);
    //
    //    // Subscribe to a newly created stream
    //    session.on('streamCreated', function(event) {
    //        session.subscribe(event.stream, 'subscriber', {
    //            insertMode: 'append',
    //            width: '100%',
    //            height: '100%'
    //        });
    //    });
    //
    //    session.on('sessionDisconnected', function(event) {
    //        console.log('You were disconnected from the session.', event.reason);
    //    });
    //
    //    // Connect to the session
    //    session.connect(token, function(error) {
    //        // If the connection is successful, initialize a publisher and publish to the session
    //        if (!error) {
    //            var publisher = OT.initPublisher('publisher', {
    //                insertMode: 'append',
    //                width: '100%',
    //                height: '100%'
    //            });
    //
    //            session.publish(publisher);
    //        } else {
    //            console.log('There was an error connecting to the session: ', error.code, error.message);
    //        }
    //    });
    //}
    //
    //OTSession.init(apiKey, sessionId, token, function(err, session) {
    //    console.log('Error', err);
    //    console.log(session);
    //    $scope.sessionData = session;
    //});
    //$scope.streams = OTSession.streams;




    var token;
     var pub;
     var apiKey = $scope.interviewData.openTokApiKey;
     var session;
     //var sessionId;
     var connectionCount = 0;
     var publisher;
     var sessionId = $scope.interviewData.openTokSessionID;
     var token = $scope.interviewData.openTokToken;

     var publisherOptions = {
         insertMode: 'append',
         right:'30px',
         width: 200,
         publishVideo:true,
         publishAudio:true,
         height: 175,
         top:10,
         showControls:false
     };


     $scope.disableVid = function(){

         $scope.showVid = true;
         if($scope.showVid){
             pub.publishVideo(false);
         }
         console.log("video disable");

     }
     $scope.enableVid = function(){
         pub.publishVideo(true);
         $scope.showVid = false;
         console.log("video enable");
     }

     $scope.disableAud = function(){
         $scope.showAud = true;
         if($scope.showAud == true){
             pub.publishAudio(false);
         }
         console.log("audio disable");
     }
     $scope.enableAud = function(){
         pub.publishAudio(true);
         $scope.showAud = false;
         console.log("audio enable");
     }

     var options = {
         width: '100%',
         height: '100%',
         left:0,
         insertMode: 'append',
         showControls:false,
         subscribeToAudio:true,
         subscribeToVideo:true
     }

     var layout = initLayoutContainer(document.getElementById("layout"), {
         maxRatio: 3/2,     // The narrowest ratio that will be used (default 2x3)
         minRatio: 9/16,      // The widest ratio that will be used (default 16x9)
         fixedRatio: false,  // If this is true then the aspect ratio of the video is maintained and minRatio and maxRatio are ignored (default false)
         bigClass: "OT_big", // The class to add to elements that should be sized bigger
         bigPercentage: 0.8,  // The maximum percentage of space the big ones should take up
         bigFixedRatio: false, // fixedRatio for the big ones
         bigMaxRatio: 3/2,     // The narrowest ratio to use for the big elements (default 2x3)
         bigMinRatio: 9/16,     // The widest ratio to use for the big elements (default 16x9)
         bigFirst: true        // Whether to place the big one in the top left (true) or bottom right
     });
     layout.layout();

     function connect() {

         pub = OT.initPublisher('publisherDiv',publisherOptions);
         session = OT.initSession(apiKey, sessionId);
         session.on({
             streamCreated: function(event) {
                 console.log("hello stream created",event.stream);

                 //console.log('event', event);
                 //$http({
                 //    method:'POST',
                 //    url: CONSTANT.apiUrl+'/api/common/saveArchiveId',
                 //    data:{
                 //        "interviewID": $scope.interviewData._id,
                 //        "archiveID": event.stream.id
                 //    }
                 //})
                 //    .success(function (response) {
                 //        console.log('ARCHIVE', response);
                 //    })
                 //
                 //    .error(function (response) {
                 //        console.log(response);
                 //    })

                 //$timeout(function(){
                 //    $scope.preloader = false;
                 //},200)



                 //$scope.$apply();
                 session.subscribe(event.stream, 'subscribersDiv',{showControls:false});
                 //connectionCount++;
                 //if (event.connection.connectionId != session.connection.connectionId) {
                 //    console.log('Another client connected. ' + connectionCount + ' total.');
                 //}
             },

             streamDestroyed:function(event){
                 console.log(event.stream.destroyedReason);
                 console.log("destroyed");
                 session.disconnect();
                 //$state.go('layout1.JobComplete');
                 //console.log($scope.VideoDisconnected.alert);
                 //BookingNotification.pushAlert()
                 //    .success(function(data){
                 //        console.log(data.data[0].currentStatus);
                 //        if(data.data[0].currentStatus != "COMPLETED" && event.stream.destroyedReason != "clientDisconnected"){
                 //            alert('client has disconnected');
                 //        }else if(event.stream.destroyedReason == "clientDisconnected"){
                 //            console.log(event.reason);
                 //            //if(data.data[0].currentStatus != "COMPLETED")$state.go('layout1.JobComplete');
                 //            //else $state.go('layout1.PriceSummary');
                 //        }
                 //    }).error(function(data){
                 //    console.log(data);
                 //});
                 bootbox.alert('Candidate has disconnected.');
                 return false;
                 //if($cookieStore.get(currentStatusUser) != "COMPLETED"){
                 //    ngDialog.open({
                 //        template: 'lostConnect',
                 //        className: 'ngdialog-theme-default',
                 //        scope: $scope,
                 //        closeByDocument: false,
                 //        closeByEscape: false,
                 //        showClose: false
                 //    });
                 //}

             },
             sessionDisconnected: function sessionDisconnectHandler(event) {

                 console.log('EVENT ================', event);
                 // The event is defined by the SessionDisconnectEvent class
                 //console.log('You have disconnected the session.');
                 //bootbox.alert('You have disconnected the session. Now finish the interview.');
                 //bootbox.alert('You have disconnected the session. Now finish the interview.');
                 //$state.go('layout1.JobComplete');
                 //console.log($cookieStore.get(currentStatusUser));

                 //if($cookieStore.get(currentStatusUser) != "COMPLETED"){
                 //    ngDialog.open({
                 //        template: 'lostConnect',
                 //        className: 'ngdialog-theme-default',
                 //        scope: $scope,
                 //        closeByDocument: false,
                 //        closeByEscape: false,
                 //        showClose: false
                 //    });
                 //}
                 console.log(event);
                 if (event.reason == 'networkDisconnected') {
                     //unpublish();
                     $state.go('home.interview.upcoming');
                     bootbox.alert('Disconnected from the session. Please start again.');
                     //$state.go('layout1.JobComplete');
                     //alert('Your network connection terminated.')
                 }
             }
         });

         session.connect(token, function(error) {
             if (error) {
                 console.log(error.message);
             } else {
                 session.publish(pub);
             }
         });

     }
     connect();

     function unpublish(){
         session.unpublish(pub);
     }

    $scope.disconnect = function(data){

        if(data == 1){
            bootbox.alert('You have disconnected the session. Now finish the interview.');
        }
        session.disconnect(pub);
    };


    //function signal(){
    //
    //    session.signal(
    //        {
    //            data:"hello"
    //        },
    //        function(error) {
    //            if (error) {
    //                console.log("signal error ("
    //                    + error.code
    //                    + "): " + error.message);
    //            } else {
    //                console.log("signal sent.");
    //            }
    //        }
    //    );
    //
    //}
    //
    //signal();

    /*=============================Start: Socket.IO Implementation ================================*/

    // Socket Emits
    // ================

    console.log($cookieStore.get('SocketID'));

    if($cookieStore.get('SocketID')!=undefined && $cookieStore.get('SocketID') == true){

        socket.emit('authentication',{
            'userId':$scope.interviewData.interviewerID,
            'accessToken':$cookieStore.get('AccessToken'),
            'USER_TYPE':'INTERVIEWER',
            'sendToId':$scope.interviewData.candidateID._id,
            'interviewId':$scope.interviewData._id
        });
    }
    //
    // socket.on('cviq', function (data) {
    //     console.log(data);
    //
    //     socket.emit('authentication',{
    //         'userId':$scope.interviewData.interviewerID,
    //         'accessToken':$cookieStore.get('AccessToken'),
    //         'USER_TYPE':'INTERVIEWER',
    //         'sendToId':$scope.interviewData.candidateID._id,
    //         'interviewId':$scope.interviewData._id
    //     });
    //
    // });

    $scope.candidateMessage = [];

    socket.on('authenticated', function (data) {
        console.log('authenticated ===', data);
    });

    socket.on('unauthorized', function (data) {
        console.log('unauthorized', data);
    });

    socket.on('new message', function (data) {
        console.log('candidate message', data);
        $scope.messages.push({
            text: data.message,
            createdAt: data.createdAt,
            messageTo: "INTERVIEWER"
        });
        $scope.$apply();
    });


    $scope.messages = [];

    $scope.sendMessage = function () {
        socket.emit('send message', {
            'message': $scope.message,
            'USER_TYPE':'INTERVIEWER'
        }, function (error, data) {
            console.log('Data', data);

            $scope.messages.push({
                text: data.message,
                createdAt: data.createdAt,
                messageTo: "CANDIDATE"
            });
            $scope.$apply();

            console.log('$scope.messages', $scope.messages);
        });

        // add the message to our model locally
        //$scope.messages.push({
        //    user: $scope.name,
        //    text: $scope.message
        //});

        // clear message box
        $scope.message = '';
    };
    
    /*=============================End: Socket.IO Implementation ================================*/

    var allNonTechnicalQues, allTechnicalQues;
    $scope.allQuestions = [];
    
    $http({
        method:'GET',
        url: CONSTANT.apiUrl + '/api/interviewer/recruiterquestions',
        headers:{
            authorization: $cookieStore.get('AccessToken'),
        },
        params:{ 'candidateID': $scope.interviewData.candidateID._id }
    }).success(function(response){
          console.log('questions.getQuestions success', response);
          allNonTechnicalQues = response.data.nonTechnicalQuestions;
          allTechnicalQues = response.data.technicalQuestions;
          
          $scope.allQuestions.push.apply($scope.allQuestions, allNonTechnicalQues);
          $scope.allQuestions.push.apply($scope.allQuestions, allTechnicalQues);
    }).error(function(response){
            console.log(response);
            if(response.statusCode == 401){
                $rootScope.sessionExpired();
            }
    })


    /*=============================Start: filter technical/Non technical questions ================================*/

    $scope.filterQuestions = function (val) {
        console.log(val);

        $scope.allQuestions = [];

        if(val == 'Technical'){
            $scope.allQuestions.push.apply($scope.allQuestions, allTechnicalQues);
        }
        else if(val == 'Non-Technical'){
            $scope.allQuestions.push.apply($scope.allQuestions, allNonTechnicalQues);
        }
        else{
            $scope.allQuestions.push.apply($scope.allQuestions, allNonTechnicalQues);
            $scope.allQuestions.push.apply($scope.allQuestions, allTechnicalQues);
        }
    }

    /*=============================End: filter technical/Non technical questions ================================*/


}]);