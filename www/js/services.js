angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('IPMService', function() {
  // Might use a resource here that returns a JSON array
  var subcategories = 
    [
        {index: 0, category: "Vegetables", name: "Corn"}, 
        {index: 1, category: "Fruits", name: "Apple"}, 
        {index: 2, category: "Greenhouse", name: "Mums"}, 
        {index: 3, category: "Nursery, Landscape", name: "Trees"},
        {index: 4, category: "Landscape, Nursery", name: "Shrubs"},
        {index: 5, category: "Vegetables", name: "Pepper"}, 
        {index: 6, category: "Vegetables", name: "Tomato"}, 
        {index: 7, category: "Vegetables", name: "Cucurbit"}, 
        {index: 8, category: "Fruits", name: "Peach"}, 
        {index: 9, category: "Fruits", name: "Strawberry"}, 
        {index: 10, category: "Fruits", name: "Blueberry"}, 
        {index: 11, category: "Greenhouse", name: "Herbs"}, 
        {index: 12, category: "Greenhouse", name: "Holiday"}, 
        {index: 13, category: "Landscape, Nursery", name: "Perennials"},
		{index: 14, category: "Fruits", name: "Eggplant"}, 
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