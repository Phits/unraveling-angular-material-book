(function() {

  angular
    .module('layout', [])
    .controller('LayoutController', ['$mdMedia', '$scope', LayoutController]);

  function LayoutController($mdMedia, $scope) {
    var self = this;

    $scope.$watch(function() {
      return $mdMedia('xs')
        ? 'xs'
        : ($mdMedia('sm')
          ? 'small'
          : ($mdMedia('md')
            ? 'medium' : 'large'));
    }, function(size){
      self.screenSize = size;
    })
  }
})();