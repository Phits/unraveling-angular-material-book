(function() {

  angular
    .module('cities', [])
    .controller('CitiesController', ['$scope', CitiesController]);

  function CitiesController($scope) {
    $scope.cities = [
      "Brussels",
      "Budapest",
      "Oslo",
      "New York",
      "Rome",
      "Seattle"
    ];
  }
})();