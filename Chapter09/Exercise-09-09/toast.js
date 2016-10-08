(function() {

  angular
    .module('toast', [])
    .controller('ToastController', ['$scope', '$mdToast', ToastController]);

  function ToastController($scope, $mdToast) {
    $scope.toastVisible = false;
    $scope.dismissAction = '';
    var actionName = 'Got it!';

    $scope.showToast = function() {
      $scope.toastVisible = true;
      $scope.dismissAction = '';
      var toast = $mdToast.simple()
        .content('You have received a new mail! ')
        .position('top right')
        .action(actionName)
        .hideDelay(5000);
      $mdToast.show(toast).then(
        function(response) {
          $scope.toastVisible = false;
          $scope.dismissAction = response === 'ok'
            ? actionName : 'Timeout';
        },
        function() {
          $scope.toastVisible = false;
          $scope.dismissAction = 'Dismiss button';
        });
    };

    $scope.dismissToast = function() {
      $mdToast.cancel();
    }
  }
})();