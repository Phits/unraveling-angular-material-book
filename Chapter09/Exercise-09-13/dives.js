(function() {
  angular.module('dives', [])
    .controller('DiveLogController', ['$scope', DiveLogController]);

  function DiveLogController($scope) {
    var dives = [
      {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 72,
        time: 82
      },
      {
        site: 'Ponte Mahoon',
        location: 'Maehbourg, Mauritius',
        depth: 54,
        time: 38
      },
      {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        depth: 98,
        time: 62
      },
      {
        site: 'Shark & Yolanda',
        location: 'Ras Mohamed, Egypt',
        depth: 76,
        time: 52
      }];

    var longest = 0;
    var deepest = 0;
    for (var i = 0; i < dives.length; i++) {
      if (dives[i].time > dives[longest].time) {
        longest = i;
      }
      if (dives[i].depth > dives[deepest].depth) {
        deepest = i;
      }
    }

    $scope.dives = dives;
    $scope.longest = longest;
    $scope.deepest = deepest;

    $scope.displayAll = function() {
      $scope.showLongest = false;
      $scope.showDeepest = false;
    }

    $scope.displayLongest = function() {
      $scope.showLongest = true;
      $scope.showDeepest = false;
    }

    $scope.displayDeepest = function() {
      $scope.showLongest = false;
      $scope.showDeepest = true;
    }

    $scope.displayAll();
  }
})();