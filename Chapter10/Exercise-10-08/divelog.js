(function() {
  angular.module('divelog', [])
    .controller('DiveLogController', ['$scope', '$mdBottomSheet', '$mdToast', DiveLogController])
    .controller('BottomSheetController', ['$scope', '$mdBottomSheet', BottomSheetController]);

  function DiveLogController($scope, $mdBottomSheet, $mdToast) {
    $scope.dives = [
      {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 30,
        time: 82,
        tags: ["shallow"],
        image: '1.jpg'
      },
      {
        site: 'Small Giftun',
        location: 'Hurghada, Egypt',
        depth: 78,
        time: 54,
        tags: ["deep"],
        image: '2.jpg'
      },
      {
        site: 'Fanous East',
        location: 'Hurghada, Egypt',
        depth: 38,
        time: 55,
        tags: ["shallow", "drift"],
        image: '3.jpg'
      },
      {
        site: 'Umm Gamar',
        location: 'Hurghada, Egypt',
        depth: 102,
        time: 48,
        tags: ["deep", "wreck"],
        image: '4.jpg'
      },
      {
        site: 'Paradise',
        location: 'Sharm El Sheikh, Egypt',
        depth: 34,
        time: 62,
        tags: ["shallow"],
        image: '5.jpg'
      },
      {
        site: 'Near Garden',
        location: 'Sharm El Sheikh, Egypt',
        depth: 47,
        time: 43,
        tags: ["manta"],
        image: '6.jpg'
      },
      {
        site: 'Far Garden',
        location: 'Sharm El Sheikh, Egypt',
        depth: 72,
        time: 48,
        tags: ["manta"],
        image: '7.jpg'
      },
      {
        site: 'Shark & Yolanda Reef',
        location: 'Ras Mohamed, Egypt',
        depth: 49,
        time: 57,
        tags: ["drift", "wreck", "shark"],
        image: '8.jpg'
      },
      {
        site: 'Dunraven',
        location: 'Ras Mohamed, Egypt',
        depth: 56,
        time: 49,
        tags: ["wreck"],
        image: '9.jpg'
      },
      {
        site: 'Ponte Mahoon',
        location: 'Maehbourg, Mauritius',
        depth: 54,
        time: 38,
        tags: ["manta"],
        image: '10.jpg'
      },
      {
        site: 'Shark Rock',
        location: 'Coco Beach, Mauritius',
        depth: 88,
        time: 32,
        tags: ["deep", "shark"],
        image: '11.jpg'
      },
      {
        site: 'Urchin City',
        location: 'Coco Beach, Mauritius',
        depth: 39,
        time: 58,
        tags: ["shallow"],
        image: '12.jpg'
      },
      {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        depth: 98,
        time: 62,
        tags: ["cave", "deep"],
        image: '13.jpg'
      },
      {
        site: 'Ecsed Lake',
        location: 'Ecsed, Hungary',
        depth: 24,
        time: 102,
        tags: ["shallow", "lake"],
        image: '14.jpg'
      },
      {
        site: 'Gyekenyes Lake',
        location: 'Ecsed, Hungary',
        depth: 31,
        time: 44,
        tags: ["shallow", "night", "lake"],
        image: '15.jpg'
      }
    ];

    $scope.selectedDive = $scope.dives[0];

    $scope.setDive = function(dive){
      $scope.selectedDive = dive;
      $mdBottomSheet.cancel();
    };

    $scope.showBottomSheet = function(ev) {
      var parentPanel = angular.element(
        document.querySelector('#parentPanel'));

      $mdBottomSheet.show({
        templateUrl: 'bottom-sheet-template.html',
        controller: 'BottomSheetController',
        parent: parentPanel,
        targetEvent: ev,
        locals: {dive: $scope.selectedDive},
        bindToController: true,
        controllerAs: 'ctrl'
      }).then(function(response){
        var toast = $mdToast.simple()
          .content(response)
          .position('top right')
          .hideDelay(3000);
        $mdToast.show(toast);
      });
    }
  }

  function BottomSheetController($scope, $mdBottomSheet, $mdToast){
    var actions = [
      {
        name: 'Share with buddies',
        icon: 'share',
        color: '#1565c0',
        done: 'Shared with your buddies.'
      },
      {
        name: 'Print',
        icon: 'print',
        color: '#1b5e20',
        done: 'Printed to the default printer.'
      },
      {
        name: 'Mark as favorite',
        icon: 'favorite',
        color: '#F44336',
        done: 'Marked as favorite.'
      }
    ];

    $scope.actions = actions;

    $scope.doAction = function(message) {
      $mdBottomSheet.hide(message);
    }
  }
})();