(function() {

  angular
    .module('menu', [])
    .controller('MenuController', ['$scope', MenuController]);

  function MenuController($scope) {
    $scope.actionLog = [];

    $scope.handle = function($event) {
      $scope.actionLog.push({
        id: $scope.actionLog.length,
        entry: $event.target.innerText});
    };

    $scope.openMenu = function(openMenuFn, eventArgs){
      openMenuFn(eventArgs);
      $scope.actionLog.push({
        id: $scope.actionLog.length,
        entry: "*** Menu opened"});
    }
  }
})();