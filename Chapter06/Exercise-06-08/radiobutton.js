(function() {

  angular
    .module('radiobutton', [])
    .controller('SimpleFormController', ['$scope', SimpleFormController]);

  function SimpleFormController($scope) {
    $scope.diveInfo = {};

    $scope.diveTypes = [
      {id: 0, name: "Normal"},
      {id: 1, name: "Wreck dive"},
      {id: 2, name: "Night dive"},
      {id: 3, name: "Cave dive"},
      {id: 4, name: "Deep dive"}
    ];

    $scope.altitudeTypes = [
      { category: 'Low', levels: [
          "Sea level",
          "Under 300 feet",
          "300-600 feet"
      ]},
      { category: 'High', levels: [
        "600-1200 feet",
        "1200-1800 feet",
        "1800-2400 feet"
      ]},
      { category: 'Extreme', levels: [
        "2400-4800 feet",
        "Over 4800 feet"
      ]}
    ];

    $scope.register = function(diveInfo) {
      $scope.diveInfo = diveInfo;
    }
  }
})();