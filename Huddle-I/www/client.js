// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'huddleService',
  'timelineCtrl', 
  'huddleDetailsCtrl',
  'createHuddleCtrl'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('home.huddles', {
      url: '/huddle',
      views: {
        'tab-huddles': {
          templateUrl: 'templates/huddles.html',
          controller: 'TimelineCtrl'
        }
      }
    })
  .state('home.huddle-details', {
    url: '/huddle/:huddleId',
    views: {
      'tab-huddles': {
        templateUrl: 'templates/huddle-details.html',
        controller: 'HuddleDetailsCtrl'
      }
    }
  })
  .state('home.filter-huddle', {
    url: '/filter-huddle',
    views: {
      'tab-huddles': {
        templateUrl: 'templates/filter-huddle.html',
        controller: 'FilterHuddleCtrl'
      }
    }
  })
  .state('home.createHuddle', {
    url: '/create-huddle',
    views: {
      'tab-huddles': {
        templateUrl: 'templates/create-huddle.html',
        controller: 'CreateHuddleCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/huddle');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

});