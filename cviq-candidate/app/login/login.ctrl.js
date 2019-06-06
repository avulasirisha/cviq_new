angular.module('Cviq').controller('loginCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$state','$timeout', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $state, $timeout){

    if($cookieStore.get('AccessToken') != undefined){
        $state.go('home.dashboard.aggregatedScore');
    }

    //$scope.myregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.myregex = "^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]{1}|[\\w-]{2,}))@"
        + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
        + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
        + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
        + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|"
        + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$";

    /*=============================Start: Login Interviewer Function ================================*/

    $scope.login = function (data) {
        $scope.loading = true;
        console.log(data);
        $http({
            method:'POST',
            url:CONSTANT.apiUrl + '/api/candidate/login',
            data:{
                "email": data.email,
                "password": data.password,
                "deviceType": "WEB",
                "deviceToken": "string"
            }
        })
            .success(function (response) {
                console.log("success", response);
             //   $cookieStore.put('loggedIn',true, { "path": "/" } );
                var now = new Date();
                now.setTime(now.getTime() + ( 60 * 60 * 1000));
                if( window.location.hostname == "localhost"  ){
                
                    document.cookie = "loggedIn=true; expires=" + now.toUTCString() + "; path=/site";
                    document.cookie = "CandidateOpt="+response.data.accessToken+";expires=" + now.toUTCString() + "; path=/site";
                }else{
                
                    document.cookie = "loggedIn=true; expires=" + now.toUTCString() + "; path=/";
                    document.cookie = "CandidateOpt="+response.data.accessToken+";expires=" + now.toUTCString() + "; path=/";
                }
            
               $cookieStore.put('AccessToken', response.data.accessToken,  { "path": "/" } );
                localStorage.setItem('UserDetails',JSON.stringify(response.data));
                //$cookieStore.put('UserDetails', response.data);
                $scope.loading = false;
                if(response.data.loginCount > 1){
                    $state.go('home.dashboard.aggregatedScore',{},{ reload: true });
                }
                else{
                    $state.go('home.completeYourProfile',{}, { reload: true });
                }

            })
            .error(function(response){
                console.log("error", response);
                $scope.loading = false;
                bootbox.alert(response.message);
            })
    };

    var client_key = '81wlchw1xsxvdy' ;
    var client_sec  = 'MDHwmpjb511HgBv7';
    window.onload = function() {
        var url = new URL(  window.location.href );
        var c = url.searchParams.get("code");
        if( c ){
            $http({
                method:'POST',
                url:'https://www.linkedin.com/oauth/v2/accessToken',
                data:{
                    "grant_type":'authorization_code',
                    "code":c ,
                    "redirect_uri": 'http://localhost/site/CVIQ---Web/cviq-candidate/',
                    "client_id":client_key,
                    "client_secret":client_sec
                },
                headers:{
                    'Host': 'www.linkedin.com',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .success(function (response) {
                    console.log('response', response );
                }).error(function (error){
                    console.log('error', error );
                })
        }
   };


    /*=============================End: Login Interviewer Function ================================*/

    $scope.forgotPassword = function(){
        $state.go('home.forgotPassword',{},{ reload: true });
        $rootScope.scrollToTop();
    };

    $scope.goToSignup = function(){
        $state.go('home.signup',{},{ reload: true });
        $rootScope.scrollToTop();
    };

    /*=============================Start: Login Via LinkedIn Function ================================*/

   /* $scope.liAuth = function(){
        OAuth.initialize('pJyDX12EHBYOcRDLuKOQUHpO_XA')
        OAuth.popup('linkedin2').done(function(result) {
            // do some stuff with result

        result.get('/v1/people/~:(id,first-name,last-name,headline,picture-url,email-address,public-profile-url)?format=json').then(onSuccess)
        })
        
    }*/
 
    $scope.liAuth = function(){
        window.location = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+client_key+"&redirect_uri=http://localhost/site/CVIQ---Web/cviq-candidate/&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social"
    }

    function onSuccess(data){
        console.log("Success", data);
        $scope.loading = true;
        $scope.linkedinID = data.id;

        $http({
            method: 'POST',
            url: CONSTANT.apiUrl + '/api/candidate/loginViaLinkedIn',
            data: {
                "linkedInId": $scope.linkedinID,
                "email": data.emailAddress,
                "deviceType": "WEB",
                "deviceToken": "string"
            }
        })
                .success(function(response){
                    console.log("Successin", response);
                    $cookieStore.put('loggedIn',true, { path: "" });
                    $cookieStore.put('AccessToken', response.data.accessToken);
                    localStorage.setItem('UserDetails',JSON.stringify(response.data));
                    //$cookieStore.put('UserDetails', response.data);
                    $state.go('home.dashboard.aggregatedScore');
                    $scope.loading = false;
                    $timeout(function(){
                        $state.reload();
                    },100);

                    IN.User.logout(function () {
                    console.log("User logged out of LinkedIn");
                    })

                })
                .error(function(response){
                    $scope.loading = false;
                    console.log("Errorin", response);
                    IN.User.logout(function () {
                        console.log("User logged out of LinkedIn");
                    })
                    if(response.statusCode == 400){
                        bootbox.alert('LinkedIn id not found. Please signup first');
                        $state.go('home.signup');
                    }
                })
    }

    function onError(error){
        console.log("Error", error);
        bootbox.alert(error.message);
    }

    /*=============================End: Login Via LinkedIn Function ================================*/

}]);