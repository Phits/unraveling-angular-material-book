(function() {

  angular
    .module('autocomplete', [])
    .controller('SimpleFormController', ['$scope', SimpleFormController]);

  function SimpleFormController($scope) {
    var cities = [
      "Budapest",
      "Brussels",
      "Prague",
      "Bratislava",
      "Warsaw",
      "Berlin",
      "Bucharest",
      "Beograd",
      "Ljubjana",
      "Rome",
      "Zurich",
      "Amsterdam",
      "Madrid",
      "Paris",
      "London",
      "Luxemburg",
      "Lisbon",
      "Athens",
      "La Valetta",
      "Istanbul",
      "Moscow",
      "Oslo",
      "Stockholm",
      "Helsinki",
      "Rejkjavik",
      "Copenhagen"
    ]

    $scope.cities = cities.sort();

    $scope.getMatchingCities = function(searchKey) {
      if (!searchKey) return $scope.cities;
      return $scope.cities.filter(function(item) {
        var key = searchKey.toLowerCase();
        return item.toLowerCase().indexOf(key) >= 0;
      })
    }
  }
})();