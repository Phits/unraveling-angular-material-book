(function() {

  angular
    .module('progress', [])
    .controller('ProgressController', ['$scope', '$interval', ProgressController]);

  function ProgressController($scope, $interval) {
    var handler;
    $scope.isStarted = false;
    $scope.currentValue = 0;
    $scope.bufferValue = 0;

    $scope.start = function() {
      handler = $interval(function() {
        $scope.currentValue += 2;
        if ($scope.currentValue > 100) {
          $scope.currentValue = 0;
        }
        $scope.bufferValue = $scope.currentValue * 1.2;
        if ($scope.bufferValuelue > 100) {
          $scope.bufferValue = 100;
        }
      }, 100);
      $scope.isStarted = true;
    };

    $scope.stop = function() {
      if ($scope.isStarted) {
        $interval.cancel(handler);
      }
      $scope.isStarted = false;
    };

    $scope.start();
  }
})();