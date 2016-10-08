(function() {

  angular
    .module('toast', [])
    .controller('ToastController', ['$scope', '$mdToast', ToastController]);

  function ToastController($scope, $mdToast) {
    $scope.toastVisible = false;
    $scope.dismissAction = '';

    $scope.showToast = function() {
      $scope.toastVisible = true;
      var toast = {
        controller: ToastController,
        templateUrl: 'newmail-template.html',
        position: "top right",
        hideDelay: 5000
      };
      $mdToast.show(toast).then(
        function(response) {
          $scope.toastVisible = false;
          $scope.dismissAction = response
            ? response: 'Timeout';
        },
        function() {
          $scope.toastVisible = false;
          $scope.dismissAction = 'Dismiss button';
        });
    };

    $scope.dismissToast = function() {
      $mdToast.cancel();
    };

    $scope.toastAction = function(action) {
      $mdToast.hide(action);
    }
  }
})();