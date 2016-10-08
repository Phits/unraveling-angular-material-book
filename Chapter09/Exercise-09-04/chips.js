(function() {

  angular
    .module('chips', [])
    .controller('ChipsController', ['$scope', ChipsController]);

  function ChipsController($scope) {
    $scope.fishList = [
      "Triggerfish",
      "Stringray",
      "Potato cod"
    ]
    $scope.roFishList = angular.copy($scope.fishList);
  }
})();