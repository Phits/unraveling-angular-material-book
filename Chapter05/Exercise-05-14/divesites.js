(function() {

  angular
    .module('divesites', [])
    .controller('DiveSitesController', ['$scope', DiveSitesController]);

  function DiveSitesController($scope) {
    $scope.diveSites = [
      "Small Giftun",
      "Shaab El Erg",
      "Abu Ramada",
      "Fanous North",
      "Fanadir",
      "Turtle Bay",
      "Erg Somaya",
      "Gotta Abu Ramada",
      "Um Gamar",
      "Bluff Point"
    ];

    $scope.selectedIndex = 0;
    $scope.disableEven = false;
  }
})();