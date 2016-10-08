(function() {

  angular
    .module('chips', [])
    .controller('ChipsController', ['$scope', ChipsController]);

  function ChipsController($scope) {
    $scope.fishList = [
      { name: "Triggerfish", size: "big" },
      { name: "Potato cod", size: "medium" },
      { name: "Coral pod", size: "tiny" }
    ];

    $scope.newChip = function(chip) {
      return {
        name: chip,
        size: "???"
      }
    }
  }
})();