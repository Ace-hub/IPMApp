angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ipmIndexCtrl', function($scope, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipms = IPMService.all();
	$scope.generatePath = function(str)
	{
		return "http://web9.uits.uconn.edu/ipmapp/img/" + str.toLowerCase() + ".JPG";
	}
})


// A simple controller that shows a tapped item's data
.controller('ipmDetailCtrl', function($scope, $stateParams, IPMService) {
	// "IPMs" is a service returning mock data (services.js)
	$scope.ipm = IPMService.sub();
	$scope.generatePath = function(str)
	{
		return "http://web9.uits.uconn.edu/ipmapp/img/" + str.toLowerCase() + ".JPG";
	}
})

.controller('ipmSurveyCtrl', function($scope, $stateParams, $http) {	
	// var path = 'http://10.0.3.2:8080/response?';
	// var path = 'http://localhost:8080/response?';
	var path = 'http://web9.uits.uconn.edu/ipmapp/Admin/retrieval.php?';	
	
	$scope.pest = [
		{id: 1, val: "< 10"}, 
		{id: 2, val: "10 to 50"}, 
		{id: 3, val: "51 to 100"}, 
		{id: 4, val: "> 100"}
	];
	$scope.plantPe = [
		{id:1, val: "< 10%"}, 
		{id:2, val: "10%-25%"}, 
		{id:3, val: "26%-50%"}, 
		{id:4, val: "51%-75%"}, 
		{id:5, val: "76%-100%"}
	];
	$scope.plantNo = [
		{id:1, val: "1"}, 
		{id:2, val: "2-5"}, 
		{id:3, val: "6-10"}, 
		{id:4, val: "11-20"}, 
		{id:5, val: "> 20"}
	];	
	
	$scope.pestNumber = $scope.pest[0];
	$scope.plantPercent = $scope.plantPe[0];
	$scope.plantNumber = $scope.plantNo[0];
	
	$scope.page = 0;
	$scope.leaf = {};
	$scope.fruit = {};
	$scope.bugs = {};
	$scope.branches = {};
	$scope.plant = {};
	$scope.leafReq = "";
	$scope.fruitReq = "";
	$scope.bugsReq = "";
	$scope.branchesReq = "";
	$scope.plantReq = "";
	$scope.ResultList = [];	
	
	$scope.next = function()
	{
		$scope.page++;
	}
	
	$scope.back = function()
	{
		$scope.page--;
	}
	
	$scope.submitData = function()
	{
		console.log("get");
		leafData();
		fruitData();
		overallData();
		branchesData();
		bugData();
		console.log($scope.leafReq);
		$scope.page++;
		path += "leaf=" + $scope.leafReq + "&fruit=" + $scope.fruitReq + "&bugs=" + $scope.bugsReq + "&branches=" + $scope.branchesReq + "&plant=" + $scope.plantReq + "&pestNum=" + $scope.pestNumber.id + "&plantPerc=" + $scope.plantPercent.id + "&plantNum=" + $scope.plantNumber.id;
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

		if ($scope.leaf.plantMold)
		{
			$scope.leafReq += "1,";
		}
		if (!$scope.leaf.plantMold)
		{
			$scope.leafReq += "0,";
		}	

		if ($scope.leaf.distorted)
		{
			$scope.leafReq += "1";
		}
		if (!$scope.leaf.distorted)
		{
			$scope.leafReq += "0";
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

		if ($scope.fruit.galls)
		{
			$scope.fruitReq += "1,";
		}
		if (!$scope.fruit.galls)
		{
			$scope.fruitReq += "0,";
		}	

		if ($scope.fruit.mold)
		{
			$scope.fruitReq += "1";
		}
		if (!$scope.fruit.mold)
		{
			$scope.fruitReq += "0";
		}			
	}
	
	var branchesData = function()
	{
		if ($scope.branches.discolored)
		{
			$scope.branchesReq += "1,";
		}
		if (!$scope.branches.discolored)
		{
			$scope.branchesReq += "0,";
		}
			
		if ($scope.branches.holes)
		{
			$scope.branchesReq += "1,";
		}
		if (!$scope.branches.holes)
		{
			$scope.branchesReq += "0,";
		}		

		if ($scope.branches.spots)
		{
			$scope.branchesReq += "1,";
		}
		if (!$scope.branches.spots)
		{
			$scope.branchesReq += "0,";
		}			
		
		if ($scope.branches.sap)
		{
			$scope.branchesReq += "1,";
		}
		if (!$scope.branches.sap)
		{
			$scope.branchesReq += "0,";
		}		

		if ($scope.branches.galls)
		{
			$scope.branchesReq += "1,";
		}
		if (!$scope.branches.galls)
		{
			$scope.branchesReq += "0,";
		}	

		if ($scope.branches.mold)
		{
			$scope.branchesReq += "1";
		}
		if (!$scope.branches.mold)
		{
			$scope.branchesReq += "0";
		}			
	}
	
	var overallData = function()
	{
		if ($scope.plant.wilt)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.wilt)
		{
			$scope.plantReq += "0,";
		}
			
		if ($scope.plant.dieback)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.dieback)
		{
			$scope.plantReq += "0,";
		}		

		if ($scope.plant.stunted)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.stunted)
		{
			$scope.plantReq += "0,";
		}			
		
		if ($scope.plant.dead)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.dead)
		{
			$scope.plantReq += "0,";
		}		

		if ($scope.plant.healthy)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.healthy)
		{
			$scope.plantReq += "0,";
		}	

		if ($scope.plant.distorted)
		{
			$scope.plantReq += "1,";
		}
		if (!$scope.plant.distorted)
		{
			$scope.plantReq += "0,";
		}		

		if ($scope.plant.multi)
		{
			$scope.plantReq += "1";
		}
		if (!$scope.plant.multi)
		{
			$scope.plantReq += "0";
		}		
	}
	
	var bugData = function()
	{
		if ($scope.bugs.borer)
		{
			$scope.bugsReq += "1,";
		}
		if (!$scope.bugs.borer)
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
		
		if ($scope.bugs.leafFeeder)
		{
			$scope.bugsReq += "1";
		}
		if (!$scope.bugs.leafFeeder)
		{
			$scope.bugsReq += "0";
		}		
	}
});
