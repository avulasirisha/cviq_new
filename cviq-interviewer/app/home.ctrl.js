angular.module('Cviq').controller('homeCtrl', ['$scope','$rootScope','$cookieStore','ngDialog','$http','CONSTANT','$state','$timeout','characterService','socket', function($scope, $rootScope, $cookieStore, ngDialog, $http, CONSTANT, $state, $timeout, characterService, socket){


    /*=============================Start: Custom Factory Function ================================*/

    $scope.FirsText = function($event){
        characterService.characterFunction($event);
    };

    $scope.isNumberKey = function($event){
        characterService.numberFunction($event);
    };

    $scope.isCodeKey = function($event){
        characterService.codeFunction($event);
    };

    /*=============================End: Custom Factory Function ================================*/


    $scope.loggedIn = $cookieStore.get('loggedIn');

    $scope.userData = $cookieStore.get('UserDetails');

    $scope.logout = function(){
        ngDialog.open({
            template: 'logout',
            className: 'ngdialog-theme-default',
            scope: $scope,
            closeByEscape:false,
            closeByDocument:false
        });
    }

    $scope.denyLogOut = function () {
        ngDialog.close();
    }
    $scope.confirmLogOut = function () {
        $scope.loading = true;
        $http({
            method:'PUT',
            url: CONSTANT.apiUrl + '/api/interviewer/logoutInterviewer',
            headers:{
                authorization: $cookieStore.get('AccessToken')
            }
        })
            .success(function(response){
                console.log(response);
                $scope.loading = false;
                ngDialog.close();
                $cookieStore.remove('loggedIn');
                $cookieStore.remove('AccessToken');
                $cookieStore.remove('UserDetails');
                $cookieStore.remove('SelIndustryID');
                $cookieStore.remove('StartInterviewDetails');
                $cookieStore.remove('CandidateDetails');
                $cookieStore.remove('SocketID');
                $state.go('home.login',{},{ reload: true });
                //$timeout(function () {
                //    $state.reload();
                //}, 500);
            })
            .error(function(response){
                console.log(response);
            })
    }

    $scope.var = $state.params.var;
    console.log($scope.var);

    $scope.toggle = function(){
        $('.menu-sec').slideToggle();
    }


    /*=============================Start: Get Interviewer Profile Function ================================*/

    $scope.userCompleteData = $cookieStore.get('UserDetails');
    
    $scope.goToNewRequest = function () {
        $state.go('home.interview.new',{}, {reload: true});
    }

    /*=============================End: Get Interviewer Profile Function ================================*/

    /*=============================Start: Interview notification through socket ================================*/

    socket.emit('messageFromClient',{
        'accessToken':$cookieStore.get('AccessToken'),
        'USER_TYPE':'INTERVIEWER'
    });

    socket.on('messageFromServer', function (msg) {
        console.log('messageFromServer', msg);
    });

    $scope.notification = [];

    console.log('========', $scope.notification.length);

    socket.on('newRequestToInterviewer', function (data) {
        console.log('newRequestToInterviewer', data);
        $scope.notification.push(data.message.notificationMsg);
        $scope.$apply();

        console.log('$scope.notification', $scope.notification);

    });
    
    socket.on('messageToRecruiter', function (data) {
        console.log('messageToRecruiter', data);
        $scope.notification.push(data.message.notificationMsg);
        $scope.$apply();

        console.log('$scope.notification', $scope.notification);

    });


    /*=============================End: Interview notification through socket ================================*/

}]);