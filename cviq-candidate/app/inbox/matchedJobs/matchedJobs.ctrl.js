angular.module('Cviq').controller('matchedJobsCtrl', ['$scope','$rootScope','ngDialog','$http','CONSTANT','characterService','$state','$cookieStore','$timeout','$window', function($scope, $rootScope, ngDialog, $http, CONSTANT, characterService, $state, $cookieStore, $timeout, $window){

    /*=============================Start: Get candidate matched Jobs ================================*/

    $scope.pageFunction = function (data) {

        $scope.paginationData = {
            start:0,
            limit:10
        }
        console.log('page number', data);

        if(data && data > 1) {
            $scope.paginationData.start = (data-1) * $scope.paginationData.limit;
            console.log('page number1111', $scope.paginationData.start);
        }

        $http({
            method: 'GET',
            url: CONSTANT.apiUrl + '/api/candidate/candidateMatchedJobs',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            params: $scope.paginationData
        })
            .success(function(response){
                console.log('Success', response);
                $scope.appliedJobs = response.data.jobList;
                $scope.numberOFJobs = response.data.totalCount;

                $scope.filteredData = [],
                    $scope.currentPage = data,
                    $scope.numPerPage = 10,
                    $scope.maxSize = 5;

                $scope.$watch('currentPage + numPerPage', function() {
                    $scope.filteredData = $scope.appliedJobs.slice(0, 10);
                });

            })
            .error(function(response){
                console.log(response);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })

    }


    /*=============================End: Get candidate matched Jobs ================================*/

}]);