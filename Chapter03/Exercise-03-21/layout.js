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
      $scope.__layout = {
        screen: size,
        paddingStyle: getPaddingStyle(),
        itemSize: getItemSize()
      };
    });

    function getPaddingStyle() {
      return self.screenSize == 'xs'
        ? 'smallPadding'
        : 'normalPadding';
    }

    function getItemSize() {
      switch (self.screenSize){
        case 'xs':
          return 100;
        case 'small':
          return 50;
        case 'medium':
          return 33;
        default:
          return 25;
      }
    }
  }
})();