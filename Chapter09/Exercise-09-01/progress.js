(function() {

  angular
    .module('progress', [])
    .controller('ProgressController', ['$scope', '$interval', ProgressController]);

  function ProgressController($scope, $interval) {
    var handler;
    $scope.isStarted = false;
    $scope.currentValue = 0;

    $scope.start = function() {
      handler = $interval(function() {
        $scope.currentValue += 2;
        if ($scope.currentValue > 100) {
          $scope.currentValue = 0;
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

    $scope.set = function(value) {
      $scope.stop();
      $scope.currentValue = value;
    };

    $scope.start();
  }
})();