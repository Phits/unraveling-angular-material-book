(function() {

  angular
    .module('datepicker', [])
    .controller('SimpleFormController', ['$scope', SimpleFormController]);

  function SimpleFormController($scope) {
    $scope.registeredUser = {};

    $scope.nowDate = new Date();
    $scope.minDate = new Date(
      $scope.nowDate.getFullYear(),
      $scope.nowDate.getMonth() - 3,
      $scope.nowDate.getDate());
    $scope.maxDate = new Date(
      $scope.nowDate.getFullYear(),
      $scope.nowDate.getMonth(),
      $scope.nowDate.getDate() - 1);

    $scope.register = function(user) {
      $scope.registeredUser = {
        hasDive: user.hasDive,
        diveSite: user.diveSite,
        diveDate: user.diveDate
      };
    }
  }
})();