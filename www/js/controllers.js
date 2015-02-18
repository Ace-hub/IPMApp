angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ipmIndexCtrl', function($scope, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipms = IPMService.all();
})


// A simple controller that shows a tapped item's data
.controller('ipmDetailCtrl', function($scope, $stateParams, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipm = IPMService.sub();
})

.controller('ipmSurveyCtrl', function($scope, $stateParams, $http) {	
	var path = 'http://localhost:8080/response?';
	
	$scope.submitData = function()
	{
		console.log("get");
		$http.get(path).success(function(data) 
		{
            $scope.response = data;
			console.log(data);
        });
		
		window.location.href = "#/tab/result";
	}
});