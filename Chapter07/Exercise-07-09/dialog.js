(function() {

  angular
    .module('dialog', [])
    .controller('DialogController', ['$scope', '$mdDialog', DialogController]);

  function DialogController($scope, $mdDialog) {
    $scope.showAlert = function(ev) {
      var parentPanel = angular.element(
        document.querySelector('#sourcePanel'))
      var dialog = $mdDialog.alert()
        .parent(parentPanel)
        .targetEvent(ev)
        .clickOutsideToClose(true)
        .title('Your battery is low.')
        .textContent('Now, your battery has a critically low capacity, 8%.')
        .ariaLabel('Battery level is low')
        .ok('OK');
      $mdDialog.show(dialog);
    }
  }
})();