(function() {

  angular
    .module('card', [])
    .controller('CardController', ['$scope', '$mdToast', CardController]);

  function CardController($scope, $mdToast) {
    var diveCards = [
      {
        title: "Crocodile fish",
        src: '1.jpg',
        taken: '06/18/2008',
        site: 'Abu gotta Ramada'
      },
      {
        title: "Blue-spotted stingray",
        src: '2.jpg',
        taken: '06/19/2008',
        site: 'Turtle Bay'
      },
      {
        title: "Coral pods over the reef",
        src: '5.jpg',
        taken: '06/23/2008',
        site: 'Far Garden'
      },
      {
        title: "Nudibranch",
        src: '8.jpg',
        taken: '06/24/2008',
        site: 'El Arouk'
      }
    ];

    $scope.diveCards = diveCards;

    $scope.doAction = function(ev, message) {
      var toast = $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(3000);
      $mdToast.show(toast);
      ev.stopPropagation();
    }
  }
})();