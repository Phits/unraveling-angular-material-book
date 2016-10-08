(function() {

  angular
    .module('list', [])
    .controller('ListController', ['$scope', '$mdDialog', ListController]);

  function ListController($scope, $mdDialog) {

    var travelInfo = [
      {
        title: "Travel",
        icon: "airplanemode_active",
        topics: [
          "Cyprus",
          "Egypt",
          "Mauritius"
        ]
      },
      {
        title: "Hotel",
        icon: "local_hotel",
        topics: [
          "Dive bungalows",
          "Tents",
          "Hostels",
          "Hotels"
        ]
      },
      {
        title: "Car rental",
        icon: "card_travel",
        topics: [
          "Small cars",
          "Family cars",
          "Vans"
        ]
      },
      {
        title: "Dive sites",
        icon: "library_books",
        topics: [
          "Shallow dives",
          "Wreck dives",
          "Night dives",
          "Cave dives"
        ]
      }
    ];

    $scope.travelInfo = travelInfo;

    $scope.expandOrCollapse = function(item) {
      item.expanded = !item.expanded;
    };

    $scope.dividerBefore = function(index) {
      return index > 0
        && $scope.travelInfo[index].expanded
        && !$scope.travelInfo[index-1].expanded
    }

    $scope.dividerAfter = function(index) {
      return index < $scope.travelInfo.length - 1
        && $scope.travelInfo[index].expanded;
    }

    $scope.displayTopic = function(ev, item) {
      var dialog = $mdDialog.alert()
        .title('Topic info')
        .textContent('Information about "'
        + item + '".')
        .ariaLabel('topic info')
        .ok('OK')
        .targetEvent(ev);
      $mdDialog.show(dialog);
    }

  }
})();