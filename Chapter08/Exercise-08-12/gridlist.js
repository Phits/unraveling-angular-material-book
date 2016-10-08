(function() {

  angular
    .module('gridlist', [])
    .controller('GridListController', ['$scope', GridListController]);

  function GridListController($scope) {

    var palette = [
      {name: "Red", color: "#F44336", light: true},
      {name: "Pink", color: "#E91E63", light: true},
      {name: "Purple", color: "#9C27B0", light: true},
      {name: "Deep purple", color: "#673AB7", light: true},
      {name: "Indigo", color: "#3F51B5", light: true},
      {name: "Blue", color: "#2196F3", light: true},
      {name: "Light blue", color: "#03A9F4", light: false},
      {name: "Cyan", color: "#00BCD4", light: false},
      {name: "Teal", color: "#009688", light: true},
      {name: "Green", color: "#4CAF50", light: false},
      {name: "Light green", color: "#8BC34A", light: false},
      {name: "Lime", color: "#CDDC39", light: false},
      {name: "Yellow", color: "#FFEB3B", light: false},
      {name: "Amber", color: "#FFC107", light: false},
      {name: "Orange", color: "#FF9800", light: false},
      {name: "Deep orange", color: "#FF5722", light: true},
      {name: "Brown", color: "#795548", light: true},
      {name: "Grey", color: "#9E9E9E", light: false},
      {name: "Blue grey", color: "#607D8B", light: true},
      {name: "Black", color: "#000000", light: true}
    ];

    $scope.palette = palette;
  }
})();