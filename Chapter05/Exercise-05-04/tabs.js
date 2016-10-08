(function() {
  angular.module('tabs', [])
    .controller('TabsController', ['$scope', TabsController]);

  function TabsController($scope) {
    $scope.activeTab = "";

    $scope.tabSelected = function(tab) {
      $scope.activeTab = tab;
    }
  }
})();