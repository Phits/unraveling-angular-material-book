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
        site: 'Shark-Yolanda Reef',
        location: 'Ras Mohamed, Egypt',
        depth: 48,
        time: 56,
        avatar: 'reef.jpg'
      }
    ];

    var headers = [
      "Top dive sites",
      "Best diving buddies",
      "Longest dives"
    ];

    $scope.dives = dives;
    $scope.headers = headers;
  }
})();