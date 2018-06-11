angular.module('Cviq').controller('inboxCtrl', ['$scope','$rootScope','ngDialog','$http','CONSTANT','characterService','$state','$cookieStore','$timeout','$window', function($scope, $rootScope, ngDialog, $http, CONSTANT, characterService, $state, $cookieStore, $timeout, $window){

    if($cookieStore.get('AccessToken') == undefined){
        $scope.confirmLogOut();
    }

    $scope.inbox = true;
    $rootScope.loading = true;



    // $scope.selection = function (id) {
    //     if(id==1){
    //         if($scope.inbox == false){
    //             $scope.inbox = true;
    //             $('#inboxbutton1').toggleClass('inbox-button inbox-button-selected');
    //             $('#inboxbutton2').toggleClass('inbox-button inbox-button-selected');
    //         }
    //     }
    //     else{
    //         if( $scope.inbox == true){
    //             $scope.inbox = false;
    //             $('#inboxbutton2').toggleClass('inbox-button inbox-button-selected');
    //             $('#inboxbutton1').toggleClass('inbox-button inbox-button-selected');
    //         }
    //     }
    // }

   




    $http({
        method: 'GET',
        url: CONSTANT.apiUrl + '/api/recruiter/fetchInboxMessages',
        headers:{
            'authorization': $cookieStore.get("AccessToken")
        }
    })
        .success(function (response) {
            console.log("response is  ",response.data);
            $scope.inboxArray = response.data;
            $rootScope.loading = false;

        })
        .error(function (response) {
            console.log(response);
            $rootScope.loading=false;
            if(response.statusCode == 401){
                $scope.confirmLogOut();
                bootbox.alert(response.message);
            }
            else
                bootbox.alert(response.message);

        })




}]);