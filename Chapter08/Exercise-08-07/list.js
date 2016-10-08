(function() {

  angular
    .module('list', [])
    .controller('ListController', ['$scope', '$mdDialog', ListController]);

  function ListController($scope, $mdDialog) {

    var checklist = [
      { name: "Fins", packed: false},
      { name: "Mask", packed: false},
      { name: "BCD jacket", packed: false},
      { name: "Gloves", packed: false},
      { name: "Tank", packed: false},
      { name: "Weights", packed: false},
      { name: "Knife", packed: false}
    ];

    $scope.checklist = checklist;

    $scope.explain = function(ev, item) {
      var dialog = $mdDialog.alert()
        .title('Explanation')
        .textContent('This is the explanation of "'
          + item + '".')
        .ariaLabel('explanation')
        .ok('OK')
        .targetEvent(ev);
      $mdDialog.show(dialog);
    }
  }
})();