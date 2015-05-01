angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) { $stateProvider

    // Set up the tabs angular directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

	// Give the IPM tab its own view and history
    .state('tab.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
        }
      }
    })
	    
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
		  controller: 'ipmSurveyCtrl'
        }
      }
    })

	.state('tab.result', {
      url: '/result',
      views: {
        'ipm-tab': {
          templateUrl: 'templates/result.html',    
		  controller: 'ipmSurveyCtrl'
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

  // If none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

