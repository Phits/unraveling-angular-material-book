(function() {

  angular
    .module('virtualrepeat', [])
    .controller('VirtualRepeatController', ['$scope', VirtualRepeatController]);

  function VirtualRepeatController($scope) {

    $scope.axisObjects = {
      getLength: function() { return 10000; },
      getItemAtIndex: function(i) { return i; }
    };

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