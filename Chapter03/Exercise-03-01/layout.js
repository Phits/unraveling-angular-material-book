(function() {

  angular
    .module('layout', [])
    .controller('LayoutController', ['$mdMedia','$scope', LayoutController]);

  function LayoutController($mdMedia, $scope) {
    var self = this;

    self.title = 'Simple Layout';
    self.sectionTitle = 'Section #1';
    self.sectionBody = 'This is a simple section.';

    $scope.$watch(function () {
        return $mdMedia('xs') ? 'small' : 'large';
    }, function(size) {
        self.screenSize = size;
    })
  }
})();