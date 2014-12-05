angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('IPMService', function() {
  // Might use a resource here that returns a JSON array
  var subcategories = 
    [
        {index: 0, category: "Vegetables", name: "Corn", image: '../Images/corn.jpg'}, 
        {index: 1, category: "Fruits", name: "Apple", image: '../Images/apple.jpg'}, 
        {index: 2, category: "Greenhouse", name: "Mums", image: '../Images/mums.jpg'}, 
        {index: 3, category: "Nursery, Landscape", name: "Trees", image: '../Images/trees.jpg'},
        {index: 4, category: "Landscape, Nursery", name: "Shrubs", image: '../Images/shrubs.jpg'},
        {index: 5, category: "Vegetables", name: "Pepper", image: '../Images/pepper.jpg'}, 
        {index: 6, category: "Vegetables", name: "Tomato", image: '../Images/tomato.jpg'}, 
        {index: 7, category: "Vegetables", name: "Cucurbit", image: '../Images/cucurbit.jpg'}, 
        {index: 8, category: "Fruits", name: "Peach", image: '../Images/peach.jpg'}, 
        {index: 9, category: "Fruits", name: "Strawberry", image: '../Images/strawberry.jpg'}, 
        {index: 10, category: "Fruits", name: "Blueberry", image: '../Images/blueberry.jpg'}, 
        {index: 11, category: "Greenhouse", name: "Herbs", image: '../Images/herbs.jpg'}, 
        {index: 12, category: "Greenhouse", name: "Holiday", image: '../Images/holidaycrops.jpg'}, 
        {index: 13, category: "Landscape, Nursery", name: "Perennials", 
         image: '../Images/perennials.jpg'}
    ];
	
  // Some fake testing data
  var IPMs = [
    { id: 0, title: 'Vegetables', description: 'Plants in the vegetable category.' },
    { id: 1, title: 'Fruits', description: 'Seeded fruits.' },
    { id: 2, title: 'Greenhouse', description: 'Greenhouse-grown plants.' },
    { id: 3, title: 'Nursery', description: 'Nursery-raised plants.' },
	{ id: 4, title: 'Landscape', description: 'Landscaping plants.' }
  ];

  return {
    all: function() {
      return IPMs;
    },
    get: function(IPMId) {
      // Simple index lookup
      return IPMs[IPMId];
    },
	sub: function() {
		return subcategories;
	}
  }
});