/**
 * Created by cl-macmini-72 on 11/2/16.
 */
App.controller('HomeController', function ($scope, $http, $cookies, $cookieStore, CONSTANT, $state, ngDialog, $location, $timeout, anchorSmoothScroll, $window, $interval,characterService) {


    $scope.myregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.phoneRegex = /^[1-9]{1}[0-9]{9}$/;
    $scope.countryregex = /^(\+)[0-9]{1,3}$/;

    $scope.searchData ={};




   var websiteLinks ={
       recruiter :  'http://localhost/site/cviq-recruiter/#/home/login',
       candidate :  'http://localhost/site/cviq-candidate/#/home/homeScreen/search',
       interviewer:  'http://localhost/site/cviq-interviewer/#/home/login'
   };


    $("#RecruiterLink").attr("href",websiteLinks.recruiter);
    $("#CandidateLink").attr("href",websiteLinks.candidate);
    $("#InterviewerLink").attr("href",websiteLinks.interviewer);

    $scope.search = function (data) {

        console.log("helllo",data.search);
        window.location = "http://52.24.206.96/cviq-candidate/#/home/homeScreen/search?search="+data.search;
    };





    var vid = document.getElementById("myVideo");

    function playVid() {
        vid.play();
    }

    function pauseVid() {
        vid.pause();
    }
//============================================================================================
//================================= Get All Data =============================================
// ===========================================================================================


    $scope.Landingdescription = '';
    $scope.candidateCount = '';
    $scope.JobsCount = '';
    $scope.companyArray = [];
    $scope.about = {};

    $scope.candidateFeatures = {};
    $scope.recruiterFeatures = {};
    $scope.worksContent = '';

    $scope.slides2 = [];
    $scope.Memberlist = [];


    $scope.teamDescription = '';

    $scope.contact = {};

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $http({
        method: 'GET',
        url:'http://localhost:8000/api/admin/getLandingPageData',
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
        },
    })
        .success(function (data) {
            console.log("my data",data);
            console.log("success",data,data.data._id);

            $scope.mainId = data.data._id;


            $scope.Landingdescription = data.data.homeDescription;

            $scope.candidateCount = data.data.totalCandidates;
            $scope.JobsCount = data.data.totalActiveJobs;
            
            $scope.companyArray = data.data.company;


            $scope.about.aboutCviq = data.data.aboutDescription;
            $scope.about.text1 = data.data.aboutFeatureOne;
            $scope.about.text2 = data.data.aboutFeatureTwo;
            $scope.about.text3 = data.data.aboutFeatureThree;

            $scope.contact.email = data.data.contactEmail;
            $scope.contact.countryCode = data.data.contactCountryCode;
            $scope.contact.linkedInLink = data.data.contactLinkedInLink;
            $scope.contact.phoneNumber = data.data.contactPhoneNo;


            $scope.candidateFeatures.text1 = data.data.candidateFeatureTitleFirst;
            $scope.candidateFeatures.text1Description = data.data.candidateFeatureDescFirst;

            $scope.candidateFeatures.text2 = data.data.candidateFeatureTitleSecond;
            $scope.candidateFeatures.text2Description = data.data.candidateFeatureDescSecond;

            $scope.candidateFeatures.text3 = data.data.candidateFeatureTitleThird;
            $scope.candidateFeatures.text3Description = data.data.candidateFeatureDescThird;

            $scope.candidateFeatures.text4 = data.data.candidateFeatureTitleFourth;
            $scope.candidateFeatures.text4Description = data.data.candidateFeatureDescFourth;

            $scope.candidateFeatures.text5 = data.data.candidateFeatureTitleFifth;
            $scope.candidateFeatures.text5Description = data.data.candidateFeatureDescFifth;

            $scope.candidateFeatures.text6 = data.data.candidateFeatureTitleSixth;
            $scope.candidateFeatures.text6Description = data.data.candidateFeatureDescSixth;


            $scope.recruiterFeatures.text1= data.data.recruiterFeatureTitleFirst;
            $scope.recruiterFeatures.text1Description = data.data.recruiterFeatureDescFirst;

            $scope.recruiterFeatures.text2= data.data.recruiterFeatureTitleSecond;
            $scope.recruiterFeatures.text2Description = data.data.recruiterFeatureDescSecond;

            $scope.recruiterFeatures.text3= data.data.recruiterFeatureTitleThird;
            $scope.recruiterFeatures.text3Description = data.data.recruiterFeatureDescThird;

            $scope.recruiterFeatures.text4= data.data.recruiterFeatureTitleFourth;
            $scope.recruiterFeatures.text4Description = data.data.recruiterFeatureDescFourth;

            $scope.recruiterFeatures.text5= data.data.recruiterFeatureTitleFifth;
            $scope.recruiterFeatures.text5Description = data.data.recruiterFeatureDescFifth;

            $scope.recruiterFeatures.text6= data.data.recruiterFeatureTitleSixth;
            $scope.recruiterFeatures.text6Description = data.data.recruiterFeatureDescSixth;

            
            $scope.worksContent = data.data.workDescription;
            $scope.workVideoURL = data.data.workVideoURL;

            console.log("Video tag  ",$scope.workVideoURL)
            $scope.teamDescription = data.data.teamDescription;




            var dataArray = [];
            var testList = data.data.testimonial;

            testList.forEach(function (column) {

                var d = {};
                d._id = column._id;
                d.bg = 'rgba(0, 0, 0, 0.8)';
                d.caption = column.message;
                d.captionName = column.name;
                d.pic = column.picURL.original;

                dataArray.push(d);

            });

            $scope.slides2 = dataArray;

            var dataArray2 = [];
            var MemberList2 = data.data.teamDetail;

            MemberList2.forEach(function (column) {
                var d = {};
                d._id = column._id;
                d.description = column.message;
                d.name = column.name;
                d.teamDetailID = column._id;
                d.designation = column.designation;
                d.linkedin = column.linkedInLink;
                d.picURL = column.picURL.original;

                dataArray2.push(d);

            });
            $scope.Memberlist = dataArray2;

            var length=$scope.Memberlist.length;
            console.log('member length',length);


            if(length==1){
                $scope.packageClass='packages1'
            }
            else  if(length==2){
                $scope.packageClass='packages2'
            }
            else  if(length==3){
                $scope.packageClass='packages3'
            }
            else  if(length==4){
                $scope.packageClass='packages4'
            }
            else  if(length==5){
                $scope.packageClass='packages3'
            }
            else  if(length==6){
                $scope.packageClass='packages3'
            }
            else  if(length==7){
                $scope.packageClass='packages4'
            }
            else  if(length==8){
                $scope.packageClass='packages4'
            }
            else  if(length==9){
                $scope.packageClass='packages3'
            }
            else{
                $scope.packageClass='packages4'
            }


            $scope.showloader=false;

        })
        .error(function(response){
            console.log('error',response);
        });



    //===============================================================================================
    //============================      contact us APi              ===================================
    //===============================================================================================


        $scope.success = false;
        $scope.contactUs = function (data) {


            console.log('contact',data);

            $http({
                method: 'POST',
                url:'http://52.24.206.96:3001/api/admin/addContactUs',
                headers:{
                    'Content-type': 'application/json; charset=utf-8'
                },
                data:{
                    "firstName": data.fname,
                    "lastName": data.lname,
                    "email": data.email,
                    "phoneNo": data.phoneNo,
                    "message": data.message
                }
            })
                .success(function (response) {
                    console.log('success contact',response);
                    $scope.success = true;
                })
                .error(function (response) {

                    console.log('error contact',response.message);
                })


        };






    new WOW().init();

    // console.log(window.innerWidth);

    $('.light').removeClass('show');
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            $('.light').addClass('show');
            $('.light').removeClass('noShow');
        } else {
            $('.light').removeClass('show');
            $('.light').addClass('noShow');
        }
    });
    $("#myCarousel").carousel({
        interval: 5000
    });
    $("#myCarousel2").carousel({
        interval: 5000
    });

    function changeText(element, texts, detailsTexts, time) {
        var text = texts.splice(0, 1) [0];
        var detailsText = detailsTexts.splice(0, 1) [0];
        texts.push(text);
        detailsTexts.push(detailsText);
        if (text) {
            $scope.mainText = text;
            $scope.details = detailsText;
            $scope.$apply();
            setTimeout(function () {
                changeText(element, texts,detailsTexts, time);
            }, time);
        }
    }

        $scope.toggleButton = function(id){
        if(id==1){
            $scope.recruiterApp=true;
            $scope.candidateApp=false;
            $('#recruiterFeatureButton').addClass('recruiterFeatureButtonPseudo');
            $('#recruiterFeatureButton').css('background-color','#0297cf');
            $('#recruiterFeatureButton').css('color','#fff');
            $('#recruiterFeatureButton').css('opacity',1);
            $('#candidateFeatureButton').removeClass('candidateFeatureButtonPseudo');
            $('#candidateFeatureButton').css('background-color','#ccc');
            $('#candidateFeatureButton').css('color','#212121');
            $('#candidateFeatureButton').css('opacity',0.55);
        }
        else{
            $scope.candidateApp=true;
            $scope.recruiterApp=false;
            $('#recruiterFeatureButton').removeClass('recruiterFeatureButtonPseudo')
            $('#candidateFeatureButton').css('background-color','#0297cf');
            $('#candidateFeatureButton').css('color','#fff');
            $('#candidateFeatureButton').css('opacity',1);
            $('#candidateFeatureButton').addClass('candidateFeatureButtonPseudo');
            $('#recruiterFeatureButton').css('background-color','#ccc');
            $('#recruiterFeatureButton').css('color','#212121');
            $('#recruiterFeatureButton').css('opacity',0.55);
        }
    };
    $scope.toggleButton(1);


    
    $scope.goUp=function()
    {
        // $window.scrollTo(0, 0);
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
    };

    
    //console.log(window.innerHeight);
    var a = window.innerHeight;

    $scope.scroll = function(eID){
        $location.hash(eID);
        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);
    };
    $scope.scroll('section1');



   


    // ===========hiding left menu================


    $('#mynavbutton').click(function(event){


        event.stopPropagation();
       // $('#myNavbar').toggleClass('collapse in collapse');
       // console.log($('.menuMobile').length);
        if ($('.menuMobile').is(':hidden'))
        {
            console.log("hidden");
            $(".navbar").css("width","400px");
            $('.menuMobile').slideToggle(function(event){
                //console.log("in");
            });
        }
        else
        {
            console.log("visible");

            $('.menuMobile').slideToggle(function(event){
                //console.log("in");
                $(".navbar").css("width","100px");
            });

        }

    });
    $(".menuMobile li").click(function(){
        if ($('.menuMobile').is(':hidden'))
        {
            console.log("hidden");
            $(".navbar").css("width","400px");
            $('.menuMobile').slideToggle(function(event){
                //console.log("in");
            });
        }
        else
        {
            console.log("visible");

            $('.menuMobile').slideToggle(function(event){
                //console.log("in");
                $(".navbar").css("width","100px");
            });

        }
    })
    // $('#li1').click(function(){
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    //     $('.menuMobile').slideToggle();
    // });
    // $('#li2').click(function(){
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    //     $('.menuMobile').slideToggle();
    // });
    // $('#li3').click(function(){
    //     $('.menuMobile').slideToggle();
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    // });
    // $('#li4').click(function(){
    //     $('.menuMobile').slideToggle();
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    // });
    // $('#li5').click(function(){
    //     $('.menuMobile').slideToggle();
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    // });
    // $('#li6').click(function(){
    //     $('.menuMobile').slideToggle();
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    // });
    // $('#li7').click(function(){
    //     $('.menuMobile').slideToggle();
    //     // $('#myNavbar').removeClass('collapse in');
    //     // $('#myNavbar').addClass('collapse');
    // });
    // ================hidng ends=================
    $scope.privacy=function()
    {
        $state.go('privacy');
    }


    /*=============================Start: owl Carousel ================================*/

    setTimeout(function(){

        $(document).ready(function() {

            setTimeout(function() {
                $("#owl-example").owlCarousel({
                    // Most important owl features
                    loop:true,
                    items : 5,
                    itemsDesktop : [1200,4],
                    itemsDesktopSmall : [1050,3],
                    itemsTablet: [992,4],
                    itemsTabletSmall: [768,3],
                    itemsMobile : [530,2],
                    itemsCustom : [[0, 1],[350, 2],[500, 3], [630, 4], [768, 5], [977, 3], [1050, 4], [1200, 5], [1450, 6], [1680, 7]],
                    singleItem : false,
                    itemsScaleUp : false,

                    //Basic Speeds
                    slideSpeed : 200,
                    paginationSpeed : 800,
                    rewindSpeed : 1000,

                    //Autoplay
                    autoPlay : true,
                    stopOnHover : true,

                    // Navigation
                    navigation : false,
                    navigationText : ["prev","next"],
                    rewindNav : true,
                    scrollPerPage : false,

                    //Pagination
                    pagination : false,
                    paginationNumbers: false,

                    // Responsive
                    responsive: true,
                    responsiveRefreshRate : 200,
                    responsiveBaseWidth: window,

                    // CSS Styles
                    baseClass : "owl-carousel",
                    theme : "owl-theme",

                    //Lazy load
                    lazyLoad : false,
                    lazyFollow : true,
                    lazyEffect : "fade",

                    //Auto height
                    autoHeight : true,

                    //JSON
                    jsonPath : false,
                    jsonSuccess : false,

                    //Mouse Events
                    dragBeforeAnimFinish : true,
                    mouseDrag : true,
                    touchDrag : true,

                    //Transitions
                    transitionStyle : false,

                    // Other
                    addClassActive : false,

                    //Callbacks
                    beforeUpdate : false,
                    afterUpdate : false,
                    beforeInit: false,
                    afterInit: false,
                    beforeMove: false,
                    afterMove: false,
                    afterAction: false,
                    startDragging : false,
                    afterLazyLoad : false
                });


            },100);

            $(".myNext").click(function(){
                $("#owl-example").trigger('owl.next');
            })
            $(".myPrevious").click(function(){
                $("#owl-example").trigger('owl.prev');
            })




        });
    },2000);


    // $scope.prevButton = function () {
    //     $("#owl-example").owl.prev();
    //
    // }
    // $scope.nextButton = function () {
    //
    //     $("#owl-example").owl.next();
    // }

    // $(function(){
    //     $('.multi-item-carousel').carousel({
    //         interval: false
    //     });
    //
    //     // for every slide in carousel, copy the next slide's item in the slide.
    //     // Do the same for the next, next item.
    //
    //     setTimeout(function(){
    //         $('.item').not( ".carousel-control" ).each(function(){
    //             console.log("in each");
    //             var next = $(this).next();
    //             console.log('next',next);
    //             if (!next.length) {
    //                 next = $(this).siblings(':first');
    //             }
    //             next.children(':first-child').clone().appendTo($(this));
    //
    //             if (next.next().length>0) {
    //                 next.next().children(':first-child').clone().appendTo($(this));
    //             }
    //             else {
    //                 $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    //             }
    //
    //             if (next.next().next().length>0) {
    //                 next.next().next().children(':first-child').clone().appendTo($(this));
    //             }
    //             else {
    //                 $(this).siblings(':first').siblings(':first').children(':first-child').clone().appendTo($(this));
    //             }
    //             if($(window).width() >= 768 ){
    //                 console.log("width");
    //
    //                 if (next.next().next().next().length>0) {
    //                     next.next().next().next().children(':first-child').clone().appendTo($(this));
    //                 }
    //                 else {
    //                     $(this).siblings(':first').siblings(':first').siblings(':first').children(':first-child').clone().appendTo($(this));
    //                 }
    //             }
    //
    //         });
    //     }, 1000);
    // });
    // Instantiate the Bootstrap carousel
    
    
    /*=============================End : owl Carousel ================================*/
    
    
    
    /*=============================Start : 3D Carousel ================================*/

    // function AppController($scope, $log) {
        var vm = this;

        // ANY HTML
        //===================================


        $scope.options2 = {
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 450,
            height: 450,
            space: 400,
            loop: true,
            controls: true
        };

        $scope.removeSlide = removeSlide;
        $scope.addSlide = addSlide;
        $scope.selectedClick = selectedClick;
        $scope.slideChanged = slideChanged;
        $scope.beforeChange = beforeChange;
        $scope.lastSlide = lastSlide;


        function lastSlide(index) {

        }

        function beforeChange(index) {

        }

        function selectedClick(index) {

        }

        function slideChanged(index) {

        }


        function addSlide(slide, array) {
            array.push(slide);
            $scope.slide2 = {};
        }

        function removeSlide(index, array) {
            array.splice(array.indexOf(array[index]), 1);
        }
    // }
    // AppController();

    /*=============================End : 3D Carousel ================================*/
    
    
    
    /*=============================Start: Custom Factory Function ================================*/

    $scope.FirsText = function($event){
        characterService.characterFunction($event);
    };

    $scope.isNumberKey = function($event){
        characterService.numberFunction($event);
    };
    $scope.isNumberKeyWithPlusAndDash = function($event){
        characterService.numberFunction($event);
    };

    $scope.isCodeKey = function($event){
        characterService.codeFunction($event);
    };

    /*=============================End: Custom Factory Function ================================*/
});

App.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        // console.log(startY,stopY,distance);
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        // console.log(speed,step,leapY);
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
//            console.log(elm.offsetTop);
            if(window.innerWidth < 650){
                var y = elm.offsetTop-0;
            }
            else if(window.innerWidth > 800){
                var y = elm.offsetTop-0;
            }
            else{
                var y = elm.offsetTop-0;
            }

            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});
App.directive('backTop', [function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<div id="backtop" class="{{theme}}"><button><img/></button></div>',
        scope: {
            text: "@buttonText",
            speed: "@scrollSpeed",
            theme: "@buttonTheme"
        },
        link: function(scope, element) {

            var self = this;

            scope.currentYPosition = function() {
                if (self.pageYOffset)
                    return self.pageYOffset;
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                if (document.body.scrollTop)
                    return document.body.scrollTop;
                return 0;
            };

            scope.smoothScroll = function() {
                var startY = scope.currentYPosition();
                var stopY = 0;
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY);
                    return;
                }
                var speed = Math.round(scope.speed / 100);
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for (var i = startY; i < stopY; i += step) {
                        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                        leapY += step;
                        if (leapY > stopY) leapY = stopY;
                        timer++;
                    }
                    return;
                }
                for (var j = startY; j > stopY; j -= step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY -= step;
                    if (leapY < stopY) leapY = stopY;
                    timer++;
                }
            };

            scope.button = element.find('button');

            scope.button.on('click', function() {
                scope.smoothScroll();
                element.removeClass('show');
            });

            window.addEventListener('scroll', function() {
                console.log(document.body.offsetHeight);
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    element.addClass('show');
                    console.log('showing');
                } else {
                    element.removeClass('show');
                    console.log('hiding');
                }
            });
        }
    };
}]);