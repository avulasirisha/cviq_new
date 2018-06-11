angular.module('Cviq').controller('qualitativeCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$timeout','$state','$window','$location', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $timeout, $state, $window,$location){

     $rootScope.loading=true;
    if($cookieStore.get('AccessToken') == undefined){
        $scope.confirmLogOut();
    }
    
    
    $scope.percentageValue = 150;

    $scope.candidateQualScore = false;

    $scope.fixHeight = false;

    var candArray =  $location.absUrl().split('+');

    $scope.data = {};
    $scope.data.candidateID = candArray[1];
    console.log("cad id", $scope.data.candidateID);


    $scope.maxQualitative = {};
    $scope.candidateQualitative = {};



    $http({
        method:'GET',
        url:CONSTANT.apiUrl + '/api/recruiter/getCandidateQualScore',
        headers:{
            'authorization': $cookieStore.get('AccessToken'),
        },
        params: $scope.data,
    })
        .success(function (response) {
            $rootScope.loading = false;
            console.log("response",response.data);
            
            $scope.maxQualitative.totalBackgroundPoints = response.data.totalBackgroundPoints;
            $scope.maxQualitative.totalCommunicationPoints = response.data.totalCommunicationPoints;
            $scope.maxQualitative.totalLeadershipPoints = response.data.totalLeadershipPoints;
            $scope.maxQualitative.totalQualitativeScore = response.data.totalQualitativeScore;
            $scope.maxQualitative.totalSocialSkillPoints = response.data.totalSocialSkillPoints;

            $scope.membershipTaken = response.data.membershipTaken;
            $scope.alreadyAlertSent = response.data.alreadyAlertSent;
            
            $scope.candidateQualitative.candidateBackgroundPoints = response.data.candidateBackgroundPoints;
            $scope.candidateQualitative.candidateCommunicationPoints = response.data.candidateCommunicationPoints;
            $scope.candidateQualitative.candidateLeadershipPoints = response.data.candidateLeadershipPoints;
            $scope.candidateQualitative.candidateQualitativeScore = response.data.candidateQualitativeScore;
            $scope.candidateQualitative.candidateSocialSkillPoints = response.data.candidateSocialSkillPoints;

            if($scope.candidateQualitative.candidateQualitativeScore == 0){
                $scope.candidateQualScore = false;
            }
            else{
                $scope.candidateQualScore = true;
            }

        })
        .error(function (response) {
            console.log("error",response);
            $rootScope.loading = false;
            if(response.statusCode == 401){
                $scope.confirmLogOut();
            }

        })


    $scope.sendAlert= function () {
        $('.alertButton').prop('disabled', true);
        $rootScope.loading = true;
        $http({
            method:'GET',
            url:CONSTANT.apiUrl + '/api/recruiter/sendAlertForScore',
            headers:{
                'authorization': $cookieStore.get('AccessToken'),
            },
            params: $scope.data
        })
            .success(function (response) {
                $('.alertButton').prop('disabled', false);
                $rootScope.loading = false;
                console.log("response",response.data);
                $scope.alreadyAlertSent = true;
                bootbox.alert("Alert Sent");

            })
            .error(function (response) {
                $('.alertButton').prop('disabled', false);
                console.log("error",response);
                $rootScope.loading = false;
                if(response.statusCode == 401){
                    $scope.confirmLogOut();
                }

            });



    }

    $scope.payForCandidate= function () {
        $('.alertButton').prop('disabled', true);
        $rootScope.loading = true;
        $http({
            method:'GET',
            url:CONSTANT.apiUrl + '/api/candidate/getInterviewCharges',
        })
            .success(function (response) {

                $state.go("home.candidateGateway", {"candidate":  $scope.data.candidateID, "Payment": response.data.candidateInterviewCharges});
                
                $('.alertButton').prop('disabled', false);
                $rootScope.loading = false;
                console.log("response",response.data);
            })
            .error(function (response) {
                $('.alertButton').prop('disabled', false);
                console.log("error",response);
                bootbox.alert(response.message);
                $rootScope.loading = false;
                if(response.statusCode == 401){
                    $scope.confirmLogOut();
                }

            });



    }













}]);