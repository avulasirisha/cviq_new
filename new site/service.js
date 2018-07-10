var app = angular.module('myApp', ['ngRoute','ngCookies']);

app.controller('Cviq_Head_Cntrl',['$scope', '$http', '$cookieStore', function($scope, $http, $cookieStore ) {
   
   
    var loggedInVar = $cookieStore.get('loggedIn');
    $scope.showButtons = false;
    if( loggedInVar ){
           $scope.showButtons = true;
    }

    $scope.features = [
      { "link": "#" ,"name": "Download link 1" },
      { "link": "#" ,"name": "Download link 2" },
      { "link": "#" ,"name": "Download link 3" },
      { "link": "#" ,"name": "Download link 4" }
    ];
    
    $scope.jobs = [
      { "link": "#" ,"name": "Download link 1" },
      { "link": "#" ,"name": "Download link 2" },
      { "link": "#" ,"name": "Download link 3" },
      { "link": "#" ,"name": "Download link 4" }
    ]; 
    var CVIQ_URL  = "http://localhost/site" ;
    $scope.goto_url = function( arg1, arg2 ){
        console.log( arg1 + " + " + arg2 );
        if( arg1 == "1"){
            if( arg1 == "cand"){                
                location.href = CVIQ_URL + "/cviq-candidate/#/home/login";           
            }else if( arg1 == "inter"){
                 location.href = CVIQ_URL + "/cviq-interviewer/#/home/login";
            }else if( arg1 == "rec"){
                 location.href = CVIQ_URL + "/cviq-recruiter/#/home/login";
            }
        }else{
         if( arg1 == "cand"){                
                location.href = CVIQ_URL + "/cviq-candidate/#/home/register";           
            }else if( arg1 == "inter"){
                 location.href = CVIQ_URL + "/cviq-interviewer/#/home/register";
            }else if( arg1 == "rec"){
                 location.href = CVIQ_URL + "/cviq-recruiter/#/home/register";
            }
        }
    }
   
        $scope.TrandingJobs = {};
        $scope.RecentJobs = {}; 
        $scope.FullTime = {};
        $scope.PartTIme = {};
        $scope.jobCategories = {};
       // $scope.AllCounts={};
        /* Trending Jobs */
        $http.get("http://localhost:8000/api/common/getJobs?type=trendingJobs")
        .then(function(response, error) {
            if( error ){
            console.log( response );
            }else{
                $scope.TrandingJobs =response.data;
            }
        });

       
        /* RecentJobs*/
        $http.get("http://localhost:8000/api/common/getJobs?type=recentJobs")
        .then(function(response, error) {
            if( error ){
                console.log( response );
            }else{
                $scope.RecentJobs =response.data.data;  
              for( i in $scope.RecentJobs ){ 
                  if( $scope.RecentJobs[i].jobType == "Permanent"){
                    $scope.FullTime[i] = $scope.RecentJobs[i] ;          
                  }else{
                    $scope.PartTIme[i] =  $scope.RecentJobs[i];
                  }
              }
              
                  console.log( $scope.FullTime );
           }       
        });
            
                $scope.JobCount = 20; 
                $scope.MemberCount = 25;
        /* Parttime zobs */       
        
        /* RecentJobs*/
        $http.get("http://localhost:8000/api/common/getJobCategories")
        .then(function(response, error) {
            if( error ){
                console.log( response );
            }else{
                $scope.jobCategories =response.data.data;  
           }       
        });
     
       $http.get("http://localhost:8000/api/common/getAllCounts")
        .then(function(response, error) {
            if( error ){
                console.log( "error "+ response );
            }else{
                $scope.JobCount =response.data.data["jobs"];  
                console.log( "jobs:" +$scope.JobCount );
                $scope.MemberCount =response.data.data["members"]; 

           }       
        });
        
            
   $scope.applyForJob = function(data){

        $scope.disLink = true;

        console.log($cookieStore.get('AccessToken'));

        var d = new Date();
        var timeZoneOffset = d.getTimezoneOffset();

        $http({
            method: 'POST',
            url: CONSTANT.apiUrl + '/api/candidate/applyForJob',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: {
                "jobID": data,
                "timeOffset": timeZoneOffset
            }
        })
            .success(function(response){
                console.log(response);
                $scope.disLink = false;
                bootbox.alert(response.message);
                $timeout(function(){
                    $state.reload();
                },0);
            })
            .error(function(response){
                console.log(response);
                bootbox.alert(response.message);
                $scope.disLink = false;
            })

    }  
    
}]);