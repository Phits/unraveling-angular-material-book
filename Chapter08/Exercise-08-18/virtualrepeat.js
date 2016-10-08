(function() {

  angular
    .module('virtualrepeat', [])
    .controller('VirtualRepeatController', ['$scope', VirtualRepeatController]);

  function VirtualRepeatController($scope) {
    var items = [];
    for (var i = 0; i < 10000; i++) {
      items.push(i);
    }

    $scope.axisItems = items;
    $scope.valueX = 0;
    $scope.valueY = 0;

    $scope.selectX = function(value) {
      $scope.valueX = value;
    };

    $scope.selectY = function(value) {
      $scope.valueY = value;
    }
  }
})();