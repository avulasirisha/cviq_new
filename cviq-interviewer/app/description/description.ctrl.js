angular.module('Cviq').controller('descriptionCtrl', ['$scope','$rootScope','$cookieStore','ngDialog','$http','CONSTANT','$state','$timeout', function($scope, $rootScope, $cookieStore, ngDialog, $http, CONSTANT, $state, $timeout){


    $scope.number = 5;
    $scope.getNumber = function (num) {
        return new Array(num);
    }


    //$scope.rateLater = function () {
    //    ngDialog.open({
    //        template: 'templateId',
    //        className: 'ngdialog-theme-default',
    //        scope: $scope,
    //        closeByEscape:false,
    //        closeByDocument:false
    //    });
    //};

    $scope.score = {};

    $scope.candidateDetails = JSON.parse(localStorage.getItem('CandidateDetails'));
    console.log('$scope.candidateDetails', $scope.candidateDetails);

    if($scope.candidateDetails.candidateQualitativeScore > 1){
        $scope.score = {
            backgroundPoints:$scope.candidateDetails.candidateBackgroundPoints,
            communicationPoints:$scope.candidateDetails.candidateCommunicationPoints,
            socialPoints:$scope.candidateDetails.candidateSocialSkillPoints,
            leadershipPoints:$scope.candidateDetails.candidateLeadershipPoints,
            feedback: $scope.candidateDetails.interviewerFeedback
        }
    }

    if($scope.candidateDetails.interviewerFeedback != undefined){
        $scope.score.feedback = $scope.candidateDetails.interviewerFeedback
    }

    if($scope.candidateDetails.candidateRating > 0){
        $scope.ratings = [{
            current: $scope.candidateDetails.candidateRating+1,
            max: 5
        }];
    }

    $scope.startInterviewDetails = JSON.parse(localStorage.getItem('StartInterviewDetails'));
    console.log('as', $scope.startInterviewDetails);

    /*=============================Start: submit qualitative score ================================*/

    $scope.submitScore = function (data) {
        console.log('submitScore', data);

        $http({
            method: 'POST',
            url: CONSTANT.apiUrl + '/api/interviewer/rateQualScoreByInterviewer',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: {
                "candidateID": $scope.startInterviewDetails.candidateID._id,
                "interviewID": $scope.startInterviewDetails._id,
                "candidateRating": $scope.rateToCandidate,
                "rateLater": false,
                "backgroundScore": data.backgroundPoints,
                "communicationScore": data.communicationPoints,
                "socialSkillScore": data.socialPoints,
                "leadershipScore": data.leadershipPoints,
                "feedback": data.feedback
            }
        })
            .success(function(response){
                console.log('Success', response);
                bootbox.alert(response.message);
                $timeout(function () {
                    $state.go('home.dashboard');
                },0);
            })
            .error(function(response){
                console.log(response);
                bootbox.alert(response.message);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })
    }

    /*=============================End: submit qualitative score ================================*/


    /*=============================Start: reset and rate later functions ================================*/

    $scope.resetData = function () {
        $scope.score = {};
    }
    
    $scope.rateLaterPopup = function () {

        ngDialog.open({
            template: 'rateLater',
            className: 'ngdialog-theme-default',
            scope: $scope,
            closeByEscape:false,
            closeByDocument:false
        });

    }

    $scope.rateLaterForRating = function (feed) {

        var rateLaterData = {
            "candidateID": $scope.startInterviewDetails.candidateID._id,
            "interviewID": $scope.startInterviewDetails._id,
            "candidateRating": $scope.rateToCandidate,
            "rateLater": true
        }

        if(feed != undefined) {
            rateLaterData.feedback = feed.feedback
        }

        $http({
            method: 'POST',
            url: CONSTANT.apiUrl + '/api/interviewer/rateQualScoreByInterviewer',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: rateLaterData
        })
            .success(function(response){
                ngDialog.close();
                console.log('Success', response);
                bootbox.alert(response.message);
                $timeout(function () {
                    $state.go('home.dashboard');
                },0);

            })
            .error(function(response){
                console.log(response);
                bootbox.alert(response.message);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })

    }

    /*=============================End: reset and rate later functions ================================*/


    /*=============================Start: rating functions ================================*/

    if($scope.candidateDetails.candidateRating == 0) {
        $scope.ratings = [{
            current: 1,
            max: 5
        }];
    }

    $scope.rateToCandidate;
    $scope.getSelectedRating = function (rating) {
        console.log(rating);
        $scope.rateToCandidate = rating;
    }

    /*=============================End: rating functions ================================*/


}]);

angular.module('Cviq').directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);

angular.module('Cviq').directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating1">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i+1 < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 2;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});