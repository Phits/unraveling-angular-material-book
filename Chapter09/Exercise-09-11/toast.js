(function() {

  angular
    .module('toast', [])
    .controller('ToastController', ['$scope', '$mdToast', '$timeout', ToastController]);

  function ToastController($scope, $mdToast, $timeout) {
    $scope.toastVisible = false;
    $scope.dismissAction = '';
    var actionName = 'Got it!';

    $scope.showToast = function() {
      var handler;
      $scope.toastVisible = true;
      $scope.dismissAction = '';
      var toast = $mdToast.simple()
        .content('You have received a new mail! ')
        .position('top right')
        .action(actionName)
        .hideDelay(5000);
      $mdToast.show(toast).then(
        function(response) {
          if (response === 'ok') {
            $scope.dismissAction = actionName;
            $scope.toastVisible = false;
            abortNewMessage();
          } else {
            $scope.dismissAction = 'New message';
          }
        },
        function() {
          $scope.dismissAction = 'Dismiss button';
          $scope.toastVisible = false;
          abortNewMessage();
        });

      handler = $timeout(function() {
        if (!handler) return;
        var toast = $mdToast.simple()
          .content('You have received another mail! ')
          .position('top right')
          .hideDelay(5000);
        $mdToast.show(toast).then(
          function(){
            $scope.dismissAction = 'Timeout';
            $scope.toastVisible = false;
          },
          function(){
            $scope.dismissAction = 'Dismiss button';
            $scope.toastVisible = false;
          }
        );
      }, 2000);

      function abortNewMessage() {
        if (handler) {
          $timeout.cancel(handler);
          handler = undefined;
        }
      }
    };

    $scope.dismissToast = function() {
      $mdToast.cancel();
    }
  }
})();