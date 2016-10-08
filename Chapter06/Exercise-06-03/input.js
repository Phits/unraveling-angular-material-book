(function() {

  angular
    .module('input', [])
    .controller('SimpleFormController', ['$scope', SimpleFormController]);

  function SimpleFormController($scope) {
    $scope.registeredUser = {};

    $scope.register = function(user) {
      $scope.registeredUser = user;
    }
  }
})();