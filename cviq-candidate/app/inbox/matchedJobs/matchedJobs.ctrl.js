angular.module('Cviq').controller('matchedJobsCtrl', ['$scope','$rootScope','ngDialog','$http','CONSTANT','characterService','$state','$cookieStore','$timeout','$window', function($scope, $rootScope, ngDialog, $http, CONSTANT, characterService, $state, $cookieStore, $timeout, $window){

    /*=============================Start: Get candidate matched Jobs ================================*/
    var D_data = JSON.parse(localStorage.getItem('UserDetails'));
    $scope.Recommended = D_data.searchAgent;
    $scope.pageFunction = function (data) {

        $scope.paginationData = {
            start:0,
            limit:10
        }
        console.log('page number', data );

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
    

    $scope.jobDetails = function(response){
        var member = JSON.parse( localStorage.getItem("UserDetails") )['membershipTaken'] ;
        console.log( "member + " + member );
        if( member == true ){
            $cookieStore.put('JobID', response);
            $state.go('home.inbox.jobDetails');
        }else{
                bootbox.alert('please take membership to see all details');
        }
    }

    $scope.saveDetials = function(){
        var Recommend = $scope.Recommended;
        console.log( "re :"+ Recommend);
        if( Recommend != undefined ){
            
        $http({
            method: 'GET',
            url: CONSTANT.apiUrl + '/api/candidate/SaveSearchAgent',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            params: { 'agent': Recommend }
        })
            .success(function(response){
                D_data.searchAgent = Recommend;
                localStorage.setItem('UserDetails',JSON.stringify( D_data ));
                $state.reload();
            })
            .error(function(response){                
                console.log(response);
             
                
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
              

            })
 
        }else{
                bootbox.alert('please Enter Details');
        }
    }


    /*=============================End: Get candidate matched Jobs ================================*/

}]);