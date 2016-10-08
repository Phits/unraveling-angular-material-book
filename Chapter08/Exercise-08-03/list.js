(function() {

  angular
    .module('list', [])
    .controller('ListController', ['$scope', ListController]);

  function ListController($scope) {

    var dives = [
      {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 72,
        time: 82,
        avatar: 'turtle1.jpg'
      },
      {
        site: 'Ponte Mahoon',
        location: 'Maehbourg, Mauritius',
        depth: 54,
        time: 38,
        avatar: 'napoleon.jpg'
      },
      {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        depth: 98,
        time: 62
      },
      {
        site: 'Shark-Yolanda Reef',
        location: 'Ras Mohamed, Egypt',
        depth: 48,
        time: 56,
        avatar: 'reef.jpg'
      },
      {
        site: 'Ras Zatar',
        location: 'Ras Mohamed, Egypt',
        depth: 24,
        time: 72
      },
      {
        site: 'Far Garden',
        location: 'Sharm El Sheikh, Egypt',
        depth: 54,
        time: 48,
        avatar: 'turtle2.jpg'
      }
    ];

    $scope.dives = dives;
  }
})();