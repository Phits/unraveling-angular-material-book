(function() {

  angular
    .module('list', [])
    .controller('ListController', ['$scope', ListController]);

  function ListController($scope) {

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
  }
})();