// To run this code, edit file
// index.html or index.jade and change
// html data-ng-app attribute from
// angle to myAppName
// -----------------------------------

var myApp = angular.module('cviq', ['angle','uiGmapgoogle-maps']);

myApp.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
    GoogleMapApi.configure({
//    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}]);
myApp.run(["$log", function ($log) {

    $log.log('I\'m a line from custom.js');

}]);

App.constant("CONSTANT", {
    apiUrl: 'http://localhost:8000'
});

App.constant("responseCode", {
    "SUCCESS": 200
});
myApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        'use strict';

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        //$locationProvider.html5Mode(true);

        // default route
        $urlRouterProvider.otherwise('/home');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            //
            // Single Page Routes
            // -----------------------------------
            .state('page', {
                url: '/page',
                templateUrl: 'app/pages/page.html',
                resolve: helper.resolveFor('modernizr', 'icons', 'parsley'),
                controller: ["$rootScope", function ($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            .state('home', {
                url: '/home',
                title: "Home",
                templateUrl: 'app/pages/home.html',
                resolve: helper.resolveFor('ngDialog')
            })
    }]);

myApp.factory('characterService', function(){
    return {
        characterFunction: function(evt){
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
                key = String.fromCharCode (key);
                if(key==".")return false;
                return;
            }

            key = String.fromCharCode (key);
            var regex = /[a-z ',A-Z-]|\./;

            if ( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            else{var rege = /[.]|\./;
                if ( rege.test(key) ) {
                    theEvent.returnValue = false;
                    if(theEvent.preventDefault) theEvent.preventDefault();
                }}
        },

        numberFunction: function(evt){
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;

            var regex = /[0-9]|\./;
            if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
                key = String.fromCharCode (key);
                if(key==".")return false;
                return;
            }
            key = String.fromCharCode (key);
            if ( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
        },

        codeFunction: function(evt){
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;

            var regex = /[0-9 ',+]|\./;
            if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
                key = String.fromCharCode (key);
                if(key==".")return false;
                return;
            }
            key = String.fromCharCode (key);
            if ( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
        }
    }
});
