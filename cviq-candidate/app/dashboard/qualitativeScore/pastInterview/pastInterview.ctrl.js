angular.module('Cviq').controller('pastInterviewCtrl', ['$scope','$rootScope','$cookieStore','$http','CONSTANT','$timeout','$state','$window', function($scope, $rootScope, $cookieStore, $http, CONSTANT, $timeout, $state, $window){


    /*=============================Start: Get past interviews ================================*/

    $scope.pastInterview = function (data) {

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
            url: CONSTANT.apiUrl + '/api/candidate/getPastInterviews',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            params: $scope.paginationData
        })
            .success(function(response){
                console.log('Past Interview Success', response);

                $scope.numberOFInterviews = response.data.totalCount;

                if(response.data.interviewList.length >= 1){

                    $scope.interviewLIsts = response.data.interviewList;
                    console.log('$scope.interviewLIsts', $scope.interviewLIsts);
                    $scope.numberOFInterviews = response.data.totalCount;


                    $scope.filteredData = [],
                        $scope.currentPage = data,
                        $scope.numPerPage = 10,
                        $scope.maxSize = 5;

                    $scope.$watch('currentPage + numPerPage', function() {
                        $scope.filteredData = $scope.interviewLIsts.slice(0, 10);
                    });

                }

            })
            .error(function(response){
                console.log(response);
            })

    }

    /*=============================End: Get past interviews ================================*/

    $scope.viewChat = function (interviewId, status) {

        $http({
            method: 'GET',
            url: CONSTANT.apiUrl + '/api/common/getAllChatMessages',
            params:{
                interviewID: interviewId
            }
        })
            .success(function(response){
                console.log('Chat Messages Success', response);
                var allChatMesssages = response.data;

                var docDefinition, textData1, textData2;
                var contentArray = [];

                if(allChatMesssages.length > 0){
                    
                    angular.forEach(allChatMesssages, function (value) {

                        if(value.messageTo == 'INTERVIEWER'){
                            textData1 = {text: 'Interviewer', style: 'title'};
                            textData2 = {text: value.message, style: 'myStyle'};
                            contentArray.push(textData1, textData2);
                        } else {
                            textData1 = {text: 'Candidate', style: ['title', 'anotherStyle']};
                            textData2 = {text: value.message, style: ['myStyle', 'anotherStyle']};
                            contentArray.push(textData1, textData2);
                        }
                    })

                    docDefinition = {

                        header: {
                            text: 'CVIQ',
                            style: 'mainHead'
                        },

                        content: contentArray,

                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true,
                                color: '#337ab7'
                            },
                            anotherStyle: {
                                italic: true,
                                alignment: 'right'
                            },
                            myStyle:{
                                fontSize: 11,
                                marginBottom: 10
                            },
                            mainHead: {
                                alignment: 'center',
                                marginTop:20,
                                bold: true
                            }
                        }
                    }
                    if(!status){
                        pdfMake.createPdf(docDefinition).open();
                    }
                    else{
                        pdfMake.createPdf(docDefinition).download('Interview_Chat.pdf');
                    }
                }

                else{
                    bootbox.alert('No messages available.');
                }

            })
            .error(function(response){
                console.log('Chat Messages Error', response);
            })
        
    }

        //$scope.openPdf = function() {
        //    console.log('OPEN');
        //    pdfMake.createPdf(docDefinition).open();
        //};

        //$scope.downloadPdf = function() {
        //    console.log('DOWNLOAD');
        //    pdfMake.createPdf(docDefinition).download('Interview_Chat.pdf');
        //};


}]);