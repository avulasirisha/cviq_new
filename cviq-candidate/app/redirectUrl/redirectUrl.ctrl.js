angular.module('Cviq').controller('redirectUrlCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$timeout','$state','$window','ngDialog','$location', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $timeout, $state, $window, ngDialog, $location){

    $scope.loading = true;

    var getUrl = $location.absUrl();

    var paymentIdFromPaypal = getUrl.split('=');
    paymentIdFromPaypal = paymentIdFromPaypal[1].split('&');

    console.log('paymentIdFromPaypal', paymentIdFromPaypal);

    $http({
        method: 'POST',
        url: CONSTANT.apiUrl + '/api/candidate/buyMembership',
        headers: {
            authorization: $cookieStore.get('AccessToken')
        },
        data: {
            paymentID: paymentIdFromPaypal[0]
        }
    })
        .success(function(response){
            console.log('success', response);
            $scope.loading = false;
            bootbox.alert(response.message);
            $state.go('home.dashboard.qualitativeScore.pastInterview',{},{ reload:true });
        })
        .error(function(response){
            console.log('Error', response);
            if(response.statusCode == 401){
                $rootScope.sessionExpired();
            }
        })

}]);