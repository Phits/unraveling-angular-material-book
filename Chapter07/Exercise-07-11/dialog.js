(function() {

  angular
    .module('dialog', [])
    .controller('DialogController', ['$scope', '$mdDialog', DialogController]);

  function DialogController($scope, $mdDialog) {
    $scope.dive = {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 72,
        time: 82
      };
    $scope.showConfirmation = function(ev) {
      $scope.deleteStatus = "Dialog opened";
      var parentPanel = angular.element(
        document.querySelector('#sourcePanel'));
      var dialog = {
        templateUrl: "confirm-template.html",
        controller: ConfirmationController,
        parent: parentPanel,
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {dive: $scope.dive},
        bindToController: true,
        controllerAs: 'ctrl'
      };
      $mdDialog.show(dialog).then(
        function(decision){
          $scope.deleteStatus = decision
        },
        function() {
          $scope.deleteStatus = "Delete canceled"
        });
    }
  }

  function ConfirmationController($scope, $mdDialog) {
    $scope.closeWith = function (answer) {
      $mdDialog.hide(answer);
    }

    $scope.cancel = function() {
      $mdDialog.cancel();
    }
  }
})();