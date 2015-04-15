angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ipmIndexCtrl', function($scope, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipms = IPMService.all();
	$scope.generatePath = function(str)
	{
		return "img/" + str.toLowerCase() + ".JPG";
	}
})


// A simple controller that shows a tapped item's data
.controller('ipmDetailCtrl', function($scope, $stateParams, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipm = IPMService.sub();
	$scope.generatePath = function(str)
	{
		return "img/" + str.toLowerCase() + ".JPG";
	}
})

.controller('ipmSurveyCtrl', function($scope, $stateParams, $http) {	
	// var path = 'http://10.0.3.2:8080/response?';
	var path = 'http://localhost:8080/response?';
	$scope.page = 0;
	$scope.leaf = {};
	$scope.fruit = {};
	$scope.bugs = {};
	$scope.branches = {};
	$scope.leafReq = "";
	$scope.fruitReq = "";
	$scope.ResultList = [];
	
	$scope.submitData = function()
	{
		console.log("get");
		leafData();
		fruitData();
		console.log($scope.leafReq);
		$scope.page++;
		path += "leaf=" + $scope.leafReq + "&fruit=" + $scope.fruitReq;
		console.log(path);
		$http.get(path).success(function(data) 
		{
            $scope.response = data;
			console.log(data);
			$scope.names = $scope.response.name;
			$scope.content = $scope.response.content;
			
			angular.forEach($scope.names, function(obj, key) {
				if (obj.length > 0)
				{
					var i = 0;
					var elem = {Name: obj, Content: "", Help: "http://en.wikipedia.org/wiki/"};
					var intermediate = elem.Name.split(" ");
					while ( i < intermediate.length-1)
					{
						if (i > 0)
						{
							intermediate[i] = intermediate[i].toLowerCase();
						}
						elem.Help = elem.Help + intermediate[i] + "_";
						i++;
					}
					if (i > 0)
					{
						intermediate[i] = intermediate[i].toLowerCase();
					}
					elem.Help += intermediate[i];
					console.log(elem.Help);
					elem.Content = $scope.content[key];
					$scope.ResultList.push(elem);
				}
			});		
			
			if ($scope.ResultList.length < 1)
			{
				var empty = {Name: "", Content: "Sorry, no results were returned by this query."};
				$scope.ResultList.push(empty);
			}
			
			console.log($scope.ResultList);
        }).
		error(function(data) 
		{
			$scope.names = "Sorry, no connection with the server could be established. Please try again later."
		});
	}
	
	$scope.back = function()
	{
		$scope.page--;
	}
	
	$scope.restart = function()
	{
		$scope.page = 0;
		window.location.href = '/#/tab/home';
	}
	
	var leafData = function()
	{
		if ($scope.leaf.discolored)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.discolored)
		{
			$scope.leafReq += "0,";
		}
		
		if ($scope.leaf.holes)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.holes)
		{
			$scope.leafReq += "0,";
		}
		
		if ($scope.leaf.bites)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.bites)
		{
			$scope.leafReq += "0,";
		}
		
		if ($scope.leaf.spots)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.spots)
		{
			$scope.leafReq += "0,";
		}	
		
		if ($scope.leaf.defoliated)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.defoliated)
		{
			$scope.leafReq += "0,";
		}
		
		if ($scope.leaf.leafMold)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.leafMold)
		{
			$scope.leafReq += "0,";
		}		
		
		if ($scope.leaf.distorted)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.distorted)
		{
			$scope.leafReq += "0,";
		}		
	}
	
	var fruitData = function()
	{
		if ($scope.fruit.discolored)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.discolored)
		{
			$scope.fruitReq += "0,";
		}
		
		if ($scope.fruit.holes)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.holes)
		{
			$scope.fruitReq += "0,";
		}
		
		if ($scope.fruit.bites)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.bites)
		{
			$scope.fruitReq += "0,";
		}
		
		if ($scope.fruit.spots)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.spots)
		{
			$scope.fruitReq += "0,";
		}	
		
		if ($scope.fruit.defoliated)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.defoliated)
		{
			$scope.fruitReq += "0,";
		}
		
		if ($scope.fruit.mold)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.mold)
		{
			$scope.fruitReq += "0,";
		}		
		
		if ($scope.fruit.bumps)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.bumps)
		{
			$scope.fruitReq += "0,";
		}		
		
		if ($scope.fruit.scars)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.scars)
		{
			$scope.fruitReq += "0,";
		}	
	}
	
	var bugsData = function()
	{
		if ($scope.bugs.beetle)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.beetle)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.bugs.maggot)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.maggot)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.bugs.caterpillar)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.caterpillar)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.bugs.moths)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.moths)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.bugs.aphids)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.aphids)
		{
			$scope.bugsReq += "0,";
		}
	}

	var branchesData = function()
	{
		if ($scope.branches.discolored)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.discolored)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.holes)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.holes)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.mold)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.mold)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.girdled)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.girdled)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.flower)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.flower)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.stunted)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.stunted)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.dead)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.dead)
		{
			$scope.bugsReq += "0,";
		}

		if ($scope.branches.multi)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.branches.multi)
		{
			$scope.bugsReq += "0,";
		}
	}
});
