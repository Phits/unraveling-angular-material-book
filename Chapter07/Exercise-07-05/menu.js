(function() {

  angular
    .module('menu', [])
    .controller('MenuController', ['$scope', MenuController]);

  function MenuController($scope) {
    $scope.lastAction = "";

    $scope.handle = function($event) {
      $scope.lastAction = $event.target.innerText;
    }
  }
})();