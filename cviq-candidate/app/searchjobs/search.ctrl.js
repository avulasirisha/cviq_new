angular.module('Cviq').controller('searchCtrl', ['$scope','$rootScope','ngDialog','$http','CONSTANT','characterService','$state','$cookieStore','$timeout','$window','$location' , function($scope, $rootScope, ngDialog, $http, CONSTANT, characterService, $state, $cookieStore, $timeout, $window, $location){

    $scope.var1 = $state.params.var1;
    $scope.SearchComplete =false;   
    
    $scope.candidateSearch = false; 
    $scope.filters ={};


    if($cookieStore.get('AccessToken') == undefined){
        $state.go('home.login');
    }                      

    var loggedInVar = $cookieStore.get('loggedIn');
    if(loggedInVar == undefined || loggedInVar == false){
          $cookieStore.remove('AccessToken'); 
          $state.go('home.login');
    }
    
    $timeout(function(){
        $('.selectpicker').selectpicker();
    },0);

    /*=============================Start: Get all jobs count ================================*/
        $scope.slideIndustrylist = [];
        $scope.slideCompanylist = []; 
        $scope.slideFunctionlist = [];
        $scope.slideWorkexperience=[];
        $scope.slideCountrylist = [];
        $scope.slideStatelist = [];
        $scope.slideQuantitative = [];
          


    $http({
        method:'GET',
        url: CONSTANT.apiUrl +'/api/candidate/getAllCountValues',
        headers:{
            authorization: $cookieStore.get('AccessToken')
        }
    })
        .success(function(response){
            console.log('Success Count', response);
            $scope.countForJobs = response.data;
        })
        .error(function(response){
            console.log('Error Count', response);
            if(response.statusCode == 401){
                $rootScope.sessionExpired();
            }
        })

    /*=============================End: Get all jobs count ================================*/



    /*=============================Start: Toggle Navigation Menu ================================*/

    $scope.toggleNavigation = function(){
        //$('.navigation-bar-left').css('left', 0);
        $('.navigation-bar-left').slideToggle();
    }

    $timeout(function () {

        if ($(window).width() < 1200) {
            $('.navigation-bar-left ul li a').click(function () {
                $('.navigation-bar-left').slideUp();
            });
        }

    },0);

    /*=============================End: Toggle Navigation Menu ================================*/

    /*=============================Start: Get DropDown ================================*/

    $scope.graduation;
    $scope.postGraduation;
    $scope.qualSpecialization = [];

    $http({
        method:'GET',
        url:CONSTANT.apiUrl + '/api/common/getDropDownData'
    })
        .success(function(response){
            console.log(response);
            $scope.searchDropDownData = response.data;
            $scope.graduation = response.data.Graduation;
            $scope.postGraduation = response.data.PostGraduation;
            $timeout(function(){
                $('.selectpicker').selectpicker('refresh');
            },0);
        })
        .error(function(response){
            console.log(response);
        })

    /*=============================End: Get DropDown ================================*/


    /*=============================Start: Get Functional area ID ================================*/

    $scope.selectedIndustry = function(response){
        $scope.selectedIndustryID = response._id;

        $scope.fun ={
            industryID: $scope.selectedIndustryID
        }

        $http({
            method:'GET',
            url: CONSTANT.apiUrl + '/api/common/getFunctionalAreaList',
            params: $scope.fun
        })
            .success(function(response){
                console.log(response);
                $scope.functionAreaList = response.data;
                $timeout(function(){
                    $('.selectpicker').selectpicker('refresh');
                },0);
            })
            .error(function(response){
                console.log(response);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })
    }

    /*============================= End: Get Functional area ID ================================*/

    /*=============================Start: Get Country ID ================================*/

    $scope.selectedCount = function(response){
        $scope.selCountryID = response._id;

        $scope.stat ={
            countryID: $scope.selCountryID
        }

        $http({
            method:'GET',
            url: CONSTANT.apiUrl + '/api/common/getStateList',
            params: $scope.stat
        })
            .success(function(response){
                console.log(response);
                $scope.stateList = response.data;
                $timeout(function(){
                    $('.selectpicker').selectpicker('refresh');
                },0);
            })
            .error(function(response){
                console.log(response);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })
    }

    /*=============================End: Get Country ID ================================*/


    /*=============================Start: Get Zip Code ================================*/

    $scope.selStateID = function(response){
        console.log(response);
        $scope.stateIDs = response._id;

        $scope.zip ={
            stateID: $scope.stateIDs
        }

        $http({
            method:'GET',
            url: CONSTANT.apiUrl + '/api/common/getZipCodeList',
            params: $scope.zip
        })
            .success(function(response){
                console.log(response);
                $scope.zipCodeList = response.data;
                $scope.zipCodeList = response.data;
                $timeout(function(){
                    $('.selectpicker').selectpicker('refresh');
                },0);
            })
            .error(function(response){
                console.log(response);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })
    }

    /*=============================End: Get Zip Code ================================*/

    /*=============================Start: Get Specialization ================================*/

    $scope.getQualID = function(response){
        $scope.selHighQual = response.split(" ").join("");
        console.log('aaaa', $scope.selHighQual);

        if($scope.selHighQual == 'Graduation'){

            $scope.qualSpecialization = [];
            _.forEach($scope.graduation, function(value){
                $scope.qualSpecialization.push(value.courseName);
                $timeout(function(){
                    $('.selectpicker').selectpicker('refresh');
                },0);
                console.log($scope.qualSpecialization);
            })

        }
        else if($scope.selHighQual == 'PostGraduation'){

            $scope.qualSpecialization = [];
            _.forEach($scope.postGraduation, function(value){
                $scope.qualSpecialization.push(value.courseName);
                $timeout(function(){
                    $('.selectpicker').selectpicker('refresh');
                },0);
            })
        }
    }

    /*=============================End: Get Specialization ================================*/



    /*=============================Start: Searching Jobs Via Cookie ================================*/
    if(sessionStorage.getItem('SearchedParameter') !== null){

        $scope.paramersForSearched = JSON.parse(sessionStorage.getItem('SearchedParameter'));

        //$timeout(function(){
        //    $scope.$apply();
        //    $("#sel-industry").val($scope.paramersForSearched.industry.industryName);
        //},1000);
        //
        //$timeout(function(){
        //    $('.selectpicker').selectpicker('refresh');
        //},2000);

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
        if($scope.paramersForSearched.industry == null || $scope.paramersForSearched.industry == undefined){
            $scope.paramersForSearched.industry = {};
        }
        if($scope.paramersForSearched.functionalArea == null || $scope.paramersForSearched.functionalArea == undefined){
            $scope.paramersForSearched.functionalArea = {};
        }

        if($scope.paramersForSearched.curCountry == null || $scope.paramersForSearched.curCountry == undefined){
            $scope.paramersForSearched.curCountry = {};
        }

        if($scope.paramersForSearched.curState == null || $scope.paramersForSearched.curState == undefined){
            $scope.paramersForSearched.curState = {};
        }

        if($scope.paramersForSearched.experience != undefined)
        {

            if($scope.paramersForSearched.experience.contains('-')){
                console.log('yes');
                $scope.experience = $scope.paramersForSearched.experience.split('-');
                $scope.minExperience = $scope.experience[0];
                $scope.maxExperience = $scope.experience[1];
            }
            else if($scope.paramersForSearched.experience.contains('>')){
                console.log('no');
                $scope.experience = $scope.paramersForSearched.experience.substring($scope.paramersForSearched.experience.indexOf('>') + 1);
                console.log($scope.experience);
                $scope.minExperience = $scope.experience;
                $scope.maxExperience = 50;
            }

        }

        $scope.searchParam = {
            industry:$scope.paramersForSearched.industry.industryName,
            functionalArea:$scope.paramersForSearched.functionalArea.functionalAreaName,
            minExperience:$scope.minExperience,
            maxExperience:$scope.maxExperience,
            keywords:$scope.paramersForSearched.keywords,
            country:$scope.paramersForSearched.curCountry.countryName,
            state:$scope.paramersForSearched.curState.stateName,
            minSalary:$scope.paramersForSearched.salary,
            highestQualification:$scope.paramersForSearched.qual,
            specialization:$scope.paramersForSearched.qual,
            certification:$scope.paramersForSearched.certifications,
            zipCode:$scope.paramersForSearched.zipcode,
            searchDate:$scope.fullDate,
            searchCriteria:1
        }


        $http({
            method:'GET',
            url: CONSTANT.apiUrl + '/api/candidate/searchJobs',
            params: $scope.searchParam,
            headers:{
                authorization: $cookieStore.get('AccessToken')
            }
        })
            .success(function(response){
                console.log(response);
                $scope.result = true;
                $scope.numberOFJobs = response.data.length;
                $scope.searchJobResult = response.data;

            })
            .error(function(response){
                console.log(response);
            })


    }

    /*=============================End: Searching Jobs Via Cookie ================================*/


    /*=============================Start: Searching Jobs ================================*/
 
    $scope.searching = function(response){
        $scope.appliedJobArray = [];
        $state.go('home.search.searchJobs');
        console.log(response);
          if(typeof(Storage) !== 'undefined'){
              sessionStorage.setItem('SearchedParameter', JSON.stringify(response));
          }

        console.log( "serchingfrom subm" );
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

        if( response.functionalArea == null || response.functionalArea == undefined ){
            response.functionalArea = {};
        }

        if(response.curCountry == null || response.curCountry == undefined){
            response.curCountry = {};
        }
        
        if(response.searchAgent == null || response.searchAgent == undefined){
            response.searchAgent = null;
        }
        
        if(response.curState == null || response.curState == undefined){
            response.curState = {};
        }
        
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
            industry:response.industry.industryName,
            functionalArea:response.functionalArea.functionalAreaName,
            minExperience:$scope.minExperience,
            maxExperience:$scope.maxExperience,
            keywords: response.keywords,
            country:response.curCountry.countryName,
            state:response.curState.stateName,
            minSalary:response.salary,
            highestQualification:response.qual,
            specialization:response.qual,
            certification:response.certifications,
            zipCode:response.zipcode,
            searchDate:$scope.fullDate,
            searchCriteria:1,
            searchAgent:response.searchAgent
        }


        $http({
            method:'GET',
            url: CONSTANT.apiUrl + '/api/candidate/searchJobs',
            params: $scope.searchParam,
            headers:{
                authorization: $cookieStore.get('AccessToken')
            }
        })
            .success(function(response){
                console.log(response);
                $scope.numberOFJobs = response.data.length;
                $scope.searchJobResult = response.data;
                $scope.doFilters();
                $scope.candidateSearch = true;
                $timeout(function () {
                    $state.reload('home.search.searchJobs');
                },100);

            })
            .error(function(response){
                console.log(response);
            })
    }
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }  
    $scope.doFilters = function(){
        $scope.slideIndustrylist = [];
        $scope.slideCompanylist = []; 
        $scope.slideFunctionlist = [];
        $scope.slideWorkexperience=[];
        $scope.slideCountrylist = [];
        $scope.slideStatelist = [];
        $scope.slideQuantitative = [];
          
       if( $scope.searchJobResult.length > 0 ){
       console.log(  $scope.searchJobResult );     
            for( i in $scope.searchJobResult ){
                $scope.slideIndustrylist.push( $scope.searchJobResult[i].industry ) ;
                $scope.slideFunctionlist.push( $scope.searchJobResult[i].functionalArea ) ;
                $scope.slideCompanylist.push( $scope.searchJobResult[i].companyName ) ; 
                $scope.slideWorkexperience.push( $scope.searchJobResult[i].workExperience.min+"-"+ $scope.searchJobResult[i].workExperience.max ) ;           
                $scope.slideQuantitative.push( $scope.searchJobResult[i].qualitativeScore.min ) ;
            }     
         $scope.slideIndustrylist=$scope.slideIndustrylist.filter( onlyUnique );  
         $scope.slideCompanylist= $scope.slideCompanylist.filter( onlyUnique ); 
         $scope.slideFunctionlist= $scope.slideFunctionlist.filter( onlyUnique ); 
         $scope.slideWorkexperience = $scope.slideWorkexperience.filter( onlyUnique );
         $scope.slideQuantitative =  $scope.slideQuantitative.filter( onlyUnique );
       }
      $scope.SearchComplete=true; 
       $scope.filter = {};
      $scope.filter.industry = true;
      $scope.filter.company = true;
    }
     
    /*=============================End: Searching Jobs ================================*/

    ///*=============================Start: Custom Factory Function ================================*/
    //
    //$scope.FirsText = function($event){
    //    characterService.characterFunction($event);
    //};
    //
    //$scope.isNumberKey = function($event){
    //    characterService.numberFunction($event);
    //};
    //
    //$scope.isCodeKey = function($event){
    //    characterService.codeFunction($event);
    //};
    //
    //$scope.isAlphaKey = function($event){
    //    characterService.alphaFunction($event);
    //};
    //$scope.isSpecialKey = function($event){
    //    characterService.specialFunction($event);
    //};
    //
    ///*=============================End: Custom Factory Function ================================*/

    /*=============================Start: Show Basic + Advance Search ================================*/

    $scope.btypeSearch = true;

    $scope.asearches = function(){
        $scope.typeSearch = true;
        $scope.btypeSearch = false;
        $timeout(function(){
            $('.selectpicker').selectpicker('refresh');
        },0);
    }

    $scope.bsearches = function(){
        $scope.typeSearch = false;
        $scope.btypeSearch = true;

        $scope.search.curCountry = '';
        $scope.search.curState = '';
        $scope.search.zipcode = '';
        $scope.search.qual = '';
        $scope.search.special = '';
        $scope.search.certifications = '';
        $scope.search.salary = null;

    }

    /*=============================End: Show Basic + Advance Search ================================*/


    /*=============================Start: Get Matched Jobs ================================*/

    $http({
        method: 'GET',
        url: CONSTANT.apiUrl + '/api/candidate/recentlySearchedJobs',
        headers: {
            authorization: $cookieStore.get('AccessToken')
        }
    })
        .success(function(response){
            console.log('data', response);
            $rootScope.recentlysearchedJobs = response.data;
        })
        .error(function(response){
            console.log(response);
        })

    /*=============================End: Get Matched Jobs ================================*/


    /*=============================Start: Apply for job ================================*/

    $scope.disLink = false;

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

    /*=============================End: Apply for job ================================*/
    
    
    $scope.submit_newsletter = function(){
    
     var eMail = document.getElementById("newsLetterId").value;
     if( eMail == "" ){
            bootbox.alert("Please Enter Email"); 
            return false;
     }else{
     
        $http({
            method: 'POST',
            url: CONSTANT.apiUrl + '/api/common/insertNewsLetters',
            headers: {
                authorization: $cookieStore.get('AccessToken')
            },
            data: {
                "userType": 'CANDIDATE',
                "email":eMail 
            }
        })
            .success(function(response){
                console.log(response);
                bootbox.alert(response.message);
                $timeout(function(){
                    $state.reload();
                },0);
            })
            .error(function(response){
                console.log(response);
                bootbox.alert(response.message);

            })
    }
    } 
    
      $scope.MatchedFunctions = function() {

        $scope.paginationData = {
            start:0,
            limit:20
        }
        $state.go('home.search.searchJobs');
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
                $scope.searchJobResult = response.data.jobList;
                $scope.numberOFJobs = response.data.totalCount;
                $scope.doFilters();
                $timeout(function () {
                    $state.reload('home.search.searchJobs');
                },100);
            })
            .error(function(response){
                console.log(response);
                if(response.statusCode == 401){
                    $rootScope.sessionExpired();
                }
            })

    }

    $scope.MatchedFunctions();
    
    
    
     $scope.applyFilter = function(response){
     console.log( response );

        if ( ($scope.filters.industry  ||  $scope.filters.experience   || $scope.filters.quantitative   
            || $scope.filters.country ||  $scope.filters.company ) ){
            
            console.log("response",response);

            $rootScope.loading = true;
            if($(window).width() < 992)
                $scope.toggleNavigation();

            if(response != undefined ) {
            
                            $scope.data = {};
               if(  $scope.candidateSearch  ){
                      $scope.paramersForSearched = JSON.parse(sessionStorage.getItem('SearchedParameter'));
                      if( $scope.paramersForSearched.industry != null || $scope.paramersForSearched.industry != undefined){
                          $scope.data.industry = $scope.paramersForSearched.industry.industryName;
                      }
                      if($scope.paramersForSearched.functionalArea != null || $scope.paramersForSearched.functionalArea != undefined){
                          $scope.data.functionalArea = $scope.paramersForSearched.functionalArea.functionalAreaName;
                      }
                      if($scope.paramersForSearched.curCountry != null || $scope.paramersForSearched.curCountry != undefined){
                          $scope.data.curCountry = $scope.paramersForSearched.curCountry.countryName;
                      }
                      if($scope.paramersForSearched.curState != null || $scope.paramersForSearched.curState != undefined){
                          $scope.data.curState = $scope.paramersForSearched.curState.stateName;
                      }
                      if($scope.paramersForSearched.experience != undefined)
                      {
                          if($scope.paramersForSearched.experience.contains('-')){
                              console.log('yes');
                              $scope.experience = $scope.paramersForSearched.experience.split('-');
                              $scope.data.minExperience = $scope.experience[0];
                              $scope.data.maxExperience = $scope.experience[1];
                          }
                          else if($scope.paramersForSearched.experience.contains('>')){
                              console.log('no');
                              $scope.experience = $scope.paramersForSearched.experience.substring($scope.paramersForSearched.experience.indexOf('>') + 1);
                              console.log($scope.experience);
                              $scope.data.minExperience = $scope.experience;
                              $scope.data.maxExperience = 50;
                          }
                      }
                       if($scope.paramersForSearched.keywords != null || $scope.paramersForSearched.keywords != undefined){
                                $scope.data.keywords = $scope.paramersForSearched.keywords;
                        }                                
              }else{
                $scope.data.matchedjobs = true;
              }



              if (response.experience != undefined) {
                    $scope.filter.experience = true;
                    var e_min = [];
                    var e_max = [];
                    for( i in response.experience ){
                       var realdata = i.split( "-" );
                       e_min.push( realdata[0] ); 
                       e_max.push( realdata[1] );    
                    }                    
                    $scope.data.maxExperience =  Math.max(e_max);
                    $scope.data.minExperience =  Math.min(e_min);
              }          
              if (response.industry != "") {
                  $scope.filter.industry = true;
                  var idata ="";
                  for( i in response.industry ){
                     if( response.industry[i] == true ){
                        idata +=  i +",";
                     }
                     console.log( i );
                  }
                  console.log( idata );
                  if( idata.length > 1 ){
                    $scope.data.industry = idata.substring(0, idata.length - 1);
                  }
              }
             if (response.functionalarea != undefined) {
                  $scope.filter.functionalarea = true;
                  var fdata ="";
                  for( i in response.functionalarea ){
                      if( response.functionalarea[i] == true ){
                         fdata +=  i +",";     
                      }  
                  }
                  if( fdata.length > 1 ){
                    $scope.data.functionalArea = fdata.substring(0, fdata.length - 1);
                  }
              } 
              if (response.company != undefined) {
                  $scope.filter.company = true;
                   var cdata = "";
                  for( i in response.company ){
                     if( response.company[i] == true ){                  
                        cdata +=  i +",";
                     }
                  }
                    if( cdata.length > 1 ){
                        $scope.data.company = cdata.substring(0, cdata.length - 1);
                    }
              }
              
              if (response.quantitative != undefined) {
                  $scope.filter.quantitative = true;
                  var qdata = "";
                  for( i in response.quantitative ){
                    if( response.quantitative[i] == true ){ 
                        qdata +=  i +",";
                    }
                  }
                  if( qdata.length > 1 ){
                    $scope.data.quantitative = qdata.substring(0, qdata.length - 1);
                  }
              }
              if (response.location != undefined) {
                      $scope.filter.location = true;
                      $scope.data.location = response.location;
              }
           
                console.log("dat retrieved is",$scope.data);
            }else
            {
                console.log("else")
                $scope.data = {};
            }

            $http({
                method:'GET',
                url: CONSTANT.apiUrl + '/api/candidate/searchFilterJobs',
                headers:{
                    authorization: $cookieStore.get('AccessToken')
                },
                params:$scope.data
            })
                .success(function(response){
                    console.log(response);
                    $scope.candidatesList = response.data;

                    $('body, html').animate({
                        scrollTop: 800
                    }, 1500);

                $scope.numberOFJobs = response.data.length;
                $scope.searchJobResult = response.data;
                $scope.doFilters();
                    $scope.show = true;
                    $rootScope.loading = false;
                })
                .error(function(response){
                    console.log(response);
                    if(response.statusCode == 401){
                        $scope.confirmLogOut();
                        $rootScope.loading = false;
                    }
                    $rootScope.loading = false;
                })

        }



    };

}]);

