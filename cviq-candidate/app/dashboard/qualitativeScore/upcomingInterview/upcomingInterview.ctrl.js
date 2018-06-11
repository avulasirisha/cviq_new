angular.module('Cviq').controller('upcomingInterviewCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$timeout','$state','$window','ngDialog', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $timeout, $state, $window, ngDialog){


    /*=============================Start: Get upcoming interviews ================================*/


        $http({
            method: 'GET',
            url: CONSTANT.apiUrl + '/api/candidate/getUpcomingInterviews',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            }
        })
            .success(function(response){
                console.log('Upcoming Interview', response);
                $scope.upcomingInterviewDetails = response.data[0];

                if(response.data.length >= 1){
                    $scope.interviewerSkills = response.data[0].interviewerID.technicalSkills;
                }
            })
            .error(function(response){
                console.log(response);
            })

    /*=============================End: Get upcoming interviews ================================*/

    /*=============================Start: cancel interviews ================================*/
    
    $scope.cancelInterviewPopup = function () {
        ngDialog.open({
            template: 'cancelInterview',
            className: 'ngdialog-theme-default',
            scope: $scope,
            closeByEscape:false,
            closeByDocument:false
        });
    }
    
    $scope.denyCancelInterview = function () {
        ngDialog.close();
    }
    
    $scope.confirmCancelInterview = function (data) {

        $http({
            method: 'PUT',
            url: CONSTANT.apiUrl + '/api/candidate/cancelInterview',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: {
                interviewID:data
            }
        })
            .success(function(response){
                console.log('Success', response);
                ngDialog.close();
                bootbox.alert(response.message);
                $state.go('home.dashboard.qualitativeScore.pastInterview',{}, { reload: true});

            })
            .error(function(response){
                console.log(response);
                //if(response.statusCode == 401){
                //    $rootScope.sessionExpired();
                //}
            })
        
    }

    /*=============================End: cancel interviews ================================*/

    /*=============================Start: start interviews ================================*/

    $scope.startInterview = function(data){

        $http({
            method: 'PUT',
            url: CONSTANT.apiUrl + '/api/candidate/startInterviewByCandidate',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: {
                interviewID:data
            }
        })
            .success(function(response){
                console.log('Success', response);
                localStorage.setItem('StartInterviewDetails', JSON.stringify(response.data));
                $state.go('home.skypeInterview');
                $rootScope.scrollToTop();

            })
            .error(function(response){
                console.log(response);
            })

    }

    /*=============================End: start interviews ================================*/

}]);