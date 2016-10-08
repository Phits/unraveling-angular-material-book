(function() {

  angular
    .module('dialog', [])
    .controller('DialogController', ['$scope', '$mdDialog', DialogController]);

  function DialogController($scope, $mdDialog) {
    $scope.showAlert = function() {
      var dialog = $mdDialog.alert()
        .title('Your battery level is low.')
        .textContent('Now, your battery has a critically low capacity, 8%.')
        .ariaLabel('Battery level is low')
        .ok('OK');
      $mdDialog.show(dialog);
    }
  }
})();