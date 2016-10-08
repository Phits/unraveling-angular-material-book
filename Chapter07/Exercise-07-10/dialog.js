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
        document.querySelector('#sourcePanel'))
      var dialog = $mdDialog.confirm()
        .parent(parentPanel)
        .targetEvent(ev)
        .clickOutsideToClose(true)
        .title('Delete dive log entry')
        .textContent('Are you sure, you really want to delete'
          + ' this dive log entry?')
        .ariaLabel('Delete log entry')
        .ok('Delete')
        .cancel('Leave it');

      $mdDialog.show(dialog).then(
        function(){
          $scope.deleteStatus = "Deleted"
        },
        function() {
          $scope.deleteStatus = "Delete canceled"
        });
    }
  }
})();