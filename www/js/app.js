// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

	// the ipm tab has its own child nav-view and history
    .state('tab.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
        }
      }
    })
	
    // the ipm tab has its own child nav-view and history
    .state('tab.ipm-index', {
      url: '/ipm',
      views: {
        'ipm-tab': {
          templateUrl: 'templates/ipm-index.html',
          controller: 'ipmIndexCtrl'
        }
      }
    })

    .state('tab.ipm-detail', {
      url: '/ipm/:ipmId',
      views: {
        'ipm-tab': {
          templateUrl: 'templates/ipm-detail.html',
          controller: 'ipmDetailCtrl'
        }
      }
    })
	
	.state('tab.survey', {
      url: '/survey',
      views: {
        'ipm-tab': {
          templateUrl: 'templates/survey.html',          
        }
      }
    })

	.state('tab.result', {
      url: '/result',
      views: {
        'ipm-tab': {
          templateUrl: 'templates/result.html',          
        }
      }
    })
	
    .state('tab.feedback', {
      url: '/feedback',
      views: {
        'feedback-tab': {
          templateUrl: 'templates/feedback.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

