var ipmApp = angular.module('ipmApp', []);

ipmController = function ($scope)
{
    $scope.page = 0;
    $scope.index = 0;
    
	var path = window.location
	
    $scope.categories = 
    [
        {index: 0, name: "Vegetables", image: path + '../www/Images/vegetables.jpg'}, 
        {index: 1, name: "Fruits", image: path + '../www/Images/fruits.jpg'}, 
        {index: 2, name: "Greenhouse", image: path + '../www/Images/greenhouse.jpg'}, 
        {index: 3, name: "Nursery", image: path + '../www/Images/nursery.jpg'},
        {index: 4, name: "Landscape", image: path + '../www/Images/landscape.jpg'}
    ];
    
    $scope.subcategories = 
    [
        {index: 0, category: "Vegetables", name: "Corn", image: path + '../www/Images/corn.jpg'}, 
        {index: 1, category: "Fruits", name: "Apple", image: path + '../www/Images/apple.jpg'}, 
        {index: 2, category: "Greenhouse", name: "Mums", image: path + '../www/Images/mums.jpg'}, 
        {index: 3, category: "Nursery, Landscape", name: "Trees", image: path + '../www/Images/trees.jpg'},
        {index: 4, category: "Landscape, Nursery", name: "Shrubs", image: path + '../www/Images/shrubs.jpg'},
        {index: 5, category: "Vegetables", name: "Pepper", image: path + '../www/Images/pepper.jpg'}, 
        {index: 6, category: "Vegetables", name: "Tomato", image: path + '../www/Images/tomato.jpg'}, 
        {index: 7, category: "Vegetables", name: "Cucurbit", image: path + '../www/Images/cucurbit.jpg'}, 
        {index: 8, category: "Fruits", name: "Peach", image: path + '../www/Images/peach.jpg'}, 
        {index: 9, category: "Fruits", name: "Strawberry", image: path + '../www/Images/strawberry.jpg'}, 
        {index: 10, category: "Fruits", name: "Blueberry", image: path + '../www/Images/blueberry.jpg'}, 
        {index: 11, category: "Greenhouse", name: "Herbs", image: path + '../www/Images/herbs.jpg'}, 
        {index: 12, category: "Greenhouse", name: "Holiday", image: path + '../www/Images/holidaycrops.jpg'}, 
        {index: 13, category: "Landscape, Nursery", name: "Perennials", 
         image: path + '../www/Images/perennials.jpg'}
    ];
    
    $scope.selectCategory = function (category)
    {
        $scope.category = category;
    }
    
    $scope.nextPage = function()
    {
        $scope.page++;
        console.log($scope.page);
    }
    
    $scope.resetPage = function()
    {
        $scope.page = 0;
        console.log($scope.page);
    }
    
    $scope.indexUp = function()
    {
        $scope.index++;
    }
    
    $scope.indexDown = function()
    {
        $scope.index--;
    }
}