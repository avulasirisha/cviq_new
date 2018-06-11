
angular.module('Cviq').controller('upgradePackageCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$state','$timeout', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $state, $timeout){

    $rootScope.loading = true;
    
    
    
    if($cookieStore.get('AccessToken') == undefined){
        $scope.confirmLogOut();
    }




    $scope.userPackage= ($cookieStore.get('UserDetails')).membershipPlanType;

    $scope.myClass='';


    console.log("hello i am in upgrade package ctrl",$scope.userPackage);
    $scope.package = function(id){
        console.log("selected package ",id);
        $cookieStore.put("package",id);
         console.log( $cookieStore.get("package"));
    
        // $state.go('home.redirectUrl');
       $state.go('home.gateway');
        // $state.go("home.gateway", {"type": 'recruiter', "plan": id.planRate});
    };
    
    $http({
        method:'GET',
        url: CONSTANT.apiUrl + '/api/common/getMembershipPlans',
    })
        .success(function (response) {

            console.log(response);
            $scope.plans =response.data;
            var length=response.data.length;
            console.log(response.data.length);
            
            if(length==1){
                $scope.myClass='packages1'  
            }
            else  if(length==2){
                $scope.myClass='packages2'
            }
            else  if(length==3){
                $scope.myClass='packages3'
            }
            else  if(length==4){
                $scope.myClass='packages2'
            }
            else{
                $scope.myClass='packages3'
            }
            
            // console.log(typeof($scope.plans));
            //
            // var i = 0;
            // var x;
            // while($scope.plans[i]){
            //     var descriptionArray = $scope.plans[i].planDescription.split(",");
            //     console.log(descriptionArray);
            //     $scope.plans[i].descriptionArray = descriptionArray;
            //     // for(var j=0; j<descriptionArray.length; j++){
            //     //     $scope.plans[i].j = descriptionArray[j];
            //     // }
            //
            //     i++;
            // }
            // console.log("new",$scope.plans);
    
            $rootScope.loading = false;
    
        })
        .error(function (response) {
            $rootScope.loading = false;
            console.log(response);
            if(response.statusCode == 401){
                $scope.confirmLogOut();
            }
            bootbox.alert(response.message);
    
        });



}]);