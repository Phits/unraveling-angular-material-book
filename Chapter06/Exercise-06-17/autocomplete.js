(function() {

  angular
    .module('autocomplete', [])
    .controller('SimpleFormController', ['$scope', SimpleFormController]);

  function SimpleFormController($scope) {
    var cities = [
      {name: "Budapest", hotels: 100, restaurants: 431},
      {name: "Brussels", hotels: 100, restaurants: 431},
      {name: "Prague", hotels: 100, restaurants: 431},
      {name: "Bratislava", hotels: 100, restaurants: 431},
      {name: "Warsaw", hotels: 100, restaurants: 431},
      {name: "Berlin", hotels: 100, restaurants: 431},
      {name: "Bucharest", hotels: 100, restaurants: 431},
      {name: "Beograd", hotels: 100, restaurants: 431},
      {name: "Ljubjana", hotels: 100, restaurants: 431},
      {name: "Rome", hotels: 100, restaurants: 431},
      {name: "Zurich", hotels: 100, restaurants: 431},
      {name: "Amsterdam", hotels: 100, restaurants: 431},
      {name: "Madrid", hotels: 100, restaurants: 431},
      {name: "Paris", hotels: 100, restaurants: 431},
      {name: "London", hotels: 100, restaurants: 431},
      {name: "Luxemburg", hotels: 100, restaurants: 431},
      {name: "Lisbon", hotels: 100, restaurants: 431},
      {name: "Athens", hotels: 100, restaurants: 431},
      {name: "La Valetta", hotels: 100, restaurants: 431},
      {name: "Istanbul", hotels: 100, restaurants: 431},
      {name: "Moscow", hotels: 100, restaurants: 431},
      {name: "Oslo", hotels: 100, restaurants: 431},
      {name: "Stockholm", hotels: 100, restaurants: 431},
      {name: "Helsinki", hotels: 100, restaurants: 431},
      {name: "Rejkjavik", hotels: 100, restaurants: 431},
      {name: "Copenhagen", hotels: 100, restaurants: 431}
    ]

    $scope.cities = cities.sort(function(a, b){
      return (a.name > b.name)
        ? 1
        : (a.name < b.name) ? -1 : 0;
    });

    $scope.getMatchingCities = function(searchKey) {
      if (!searchKey) return $scope.cities;
      return $scope.cities.filter(function(item) {
        var key = searchKey.toLowerCase();
        return item.name.toLowerCase().indexOf(key) >= 0;
      })
    }
  }
})();