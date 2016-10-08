(function() {

  angular
    .module('gridlist', [])
    .controller('GridListController', ['$scope', '$mdMedia', '$mdDialog', GridListController]);

  function GridListController($scope, $mdMedia, $mdDialog) {

    var pictures = [
      {title: "Crocodile fish", src: '1.jpg'},
      {title: "Blue-spotted stingray", src: '2.jpg'},
      {title: "Lionfish", src: '3.jpg'},
      {title: "Pufferfish", src: '4.jpg'},
      {title: "Coral pods over the reef", src: '5.jpg'},
      {title: "Shoal of goatfish", src: '6.jpg'},
      {title: "Crocodile fish", src: '7.jpg'},
      {title: "Nudibranch", src: '8.jpg'},
      {title: "Spotted pods", src: '9.jpg'},
      {title: "Look into my eyes", src: '10.jpg'},
      {title: "Triggerfish", src: '11.jpg'},
      {title: "Napoleon", src: '12.jpg'},
      {title: "Muray eel", src: '13.jpg'},
      {title: "Shoal of coral pods", src: '14.jpg'},
      {title: "Lionfish", src: '15.jpg'},
      {title: "Hawkfish", src: '16.jpg'}
    ];

    $scope.pictures = pictures;

    $scope.selectPicture = function(picture, ev) {
      var parentPanel = angular.element(
        document.querySelector('#pictureList'))
      var dialog = $mdDialog.alert()
        .parent(parentPanel)
        .targetEvent(ev)
        .clickOutsideToClose(true)
        .title('Free offer')
        .content("You can download '" + picture.title
          + "' for free.")
        .ariaLabel('Free offer')
        .ok('OK');
      $mdDialog.show(dialog);
    };

    $scope.hideFooter = function() {
      return $mdMedia('xs');
    }
  }
})();