var app = angular.module('myApp', ['ngRoute','ngCookies']);

app.controller('Cviq_Head_Cntrl',['$scope', '$http', '$cookieStore', '$location', '$anchorScroll', function($scope, $http, $cookieStore ,$location,$anchorScroll ) {
   
   var CONSTANT_apiUrl = "http://localhost:8000";
    var loggedInVar = $cookieStore.get('loggedIn');
 //   console.log( loggedInVar );
    function OptimizeVlaue(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
    }
    $scope.showButtons = false;
    if( loggedInVar ){
           $scope.showButtons = true;
    }
    $scope.searchresults =false;
             
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
        if( arg2 == 2 ){
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
                 location.href = CVIQ_URL + "/cviq-interviewer/#/home/signup";
            }else if( arg1 == "rec"){
                 location.href = CVIQ_URL + "/cviq-recruiter/#/home/signup";
            }
        }
    }
  
  $scope.TrandingJobs = {};
  $scope.RecentJobs = {}; 
  $scope.FullTime = {};
  $scope.PartTIme = {};
  $scope.jobCategories = {};
  $scope.JobCount = 20; 
  $scope.MemberCount = 25;
       // $scope.AllCounts={};
        /* Trending Jobs */
        var opt = {};
        if( OptimizeVlaue('CandidateOpt') != '' ){
             opt['headers'] = { authorization: OptimizeVlaue('CandidateOpt')  };
        }   
        $http.get(CONSTANT_apiUrl+"/api/candidate/getJobs?type=trendingJobs",  opt)
        .then(function(response, error) {
            if( error ){
            console.log( response );
            }else{
                $scope.TrandingJobs =response.data;
            }
        });

       
        /* RecentJobs*/
        $http.get( CONSTANT_apiUrl+"/api/candidate/getJobs?type=recentJobs",opt)
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
            
             
        /* Parttime zobs */       
        
        /* RecentJobs*/
        $http.get(CONSTANT_apiUrl+"/api/common/getJobCategories")
        .then(function(response, error) {
            if( error ){
                console.log( response );
            }else{
                $scope.jobCategories =response.data.data;  
           }       
        });
    
    
    
       $http.get( CONSTANT_apiUrl+"/api/common/getAllCounts")
        .then(function(response, error) {
            if( error ){
                console.log( "error "+ response );
            }else{
                $scope.JobCount =response.data.data["jobs"];  
                console.log( "jobs:" +$scope.JobCount );
                $scope.MemberCount =response.data.data["members"]; 

           }       
        });
        
          
          
    $scope.searchJobs = function (response) { 
    
        $scope.year = new Date().getFullYear();
        $scope.date = new Date().getDate();
        $scope.month = new Date().getMonth()+1;

        if($scope.month <= 9){
            $scope.month ='0'+ $scope.month;
        }

        if($scope.date <= 9){
            $scope.date ='0'+ $scope.date;
        }
      
        $scope.fullDate = $scope.year+'-'+$scope.month+'-'+$scope.date;
    
        if(response.experience != undefined || response.experience == '')
        {

            if(response.experience.contains('-')){
                console.log('yes');
                $scope.experience = response.experience.split('-');
                $scope.minExperience = $scope.experience[0];
                $scope.maxExperience = $scope.experience[1];
            }
            else if(response.experience.contains('>')){
                console.log('no');
                $scope.experience = response.experience.substring(response.experience.indexOf('>') + 1);
                console.log($scope.experience);
                $scope.minExperience = $scope.experience;
                $scope.maxExperience = 50;
            }

        }
             
        $scope.searchParam = {
            minExperience:$scope.minExperience,
            maxExperience:$scope.maxExperience,
            keywords: response.keywords,
            state:response.stateName,
            searchDate:$scope.fullDate,
            searchCriteria:1
        }     
        var options = { params : $scope.searchParam } ;
        if( OptimizeVlaue('CandidateOpt') != '' ){
            options.headers = {authorization: OptimizeVlaue('CandidateOpt')  };
        }                            
        $http.get(CONSTANT_apiUrl+"/api/candidate/searchJobs" , { params : $scope.searchParam  } )
        .then(function(response, error) {
            if( error ){
                console.log( response );
            }else{
                $scope.searchresults =true;
                $scope.numberOFJobs = response.data.length;
                $scope.searchJobResult = response.data.data;
                console.log( $scope.searchJobResult );
                document.getElementById("dynamic_tab").click();
 
           }       
        });
    }

   $scope.applyJob = function(data, _type ){
        console.log( data , _type );
        var d = new Date();
        var timeZoneOffset = d.getTimezoneOffset();
        $http({
            method: 'POST',
            url: CONSTANT_apiUrl + '/api/candidate/applyForJob',
            headers: {
                authorization: OptimizeVlaue('CandidateOpt')
            },
            data: {
                "jobID": data._id ,
                "timeOffset": timeZoneOffset
            }
        }).then(function(response, error){
            if( error ){
                console.log(response);
            }else{
                if( _type == 'searchedjobs' ){
                    for( i in $scope.searchJobResult ){
                        if( $scope.searchJobResult[i]._id == data._id ){
                            $scope.searchJobResult[i].alreadyApplied == true;    
                        }
                    }
                } 
            }
        });
            

    }  
    
}]);

