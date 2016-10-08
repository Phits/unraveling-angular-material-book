(function() {

  angular
    .module('list', [])
    .controller('ListController', ['$scope', ListController]);

  function ListController($scope) {

    var settings = [
      {
        name: "Beep",
        icon: "speaker_phone"
      },
      {
        name: "Deep alarm",
        icon: "alarm"
      },
      {
        name: "Nitrox",
        icon: "airplay"
      },
      {
        name: "Battery check",
        icon: "battery_alert"
      }
    ];

    $scope.settings = settings;
  }
})();