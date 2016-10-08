(function() {

  angular
    .module('toast', [])
    .controller('ToastController', ['$scope', '$mdToast', '$interval', ToastController]);

  function ToastController($scope, $mdToast, $interval) {
    $scope.toastVisible = false;
    $scope.dismissAction = '';
    $scope.mailsReceived = 0;
    var actionName = 'Got it!';
    var handler;

    $scope.showToast = function() {
      $scope.toastVisible = true;
      $scope.dismissAction = '';
      $scope.mailsReceived = 1;
      var toast = $mdToast.simple()
        .content('You have received a new mail! ')
        .position('top right')
        .action(actionName)
        .hideDelay(5000);
      $mdToast.show(toast).then(acceptShow,
        rejectShow);

      handler = $interval(function() {
          $scope.mailsReceived++;
          var newContent = 'You have '
            + $scope.mailsReceived + ' new emails!';
          $mdToast.updateContent(newContent);
      }, 800)
    };

    $scope.dismissToast = function() {
      $mdToast.cancel();
    };

    function acceptShow(response) {
      $scope.toastVisible = false;
      $scope.dismissAction = response === 'ok'
        ? actionName + ' (' + $scope.mailsReceived + ')'
        : 'Timeout';
      closeInterval();
    }

    function rejectShow() {
      $scope.toastVisible = false;
      $scope.dismissAction = 'Dismiss button';
      closeInterval();
    }

    function closeInterval() {
      if (handler) {
        $interval.cancel(handler);
        handler = undefined;
      }
    }
  }
})();