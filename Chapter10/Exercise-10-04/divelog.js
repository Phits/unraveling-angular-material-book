(function() {
  angular.module('divelog', [])
    .controller('DiveLogController', ['$scope', '$mdMedia', '$mdSidenav', DiveLogController]);

  function DiveLogController($scope, $mdMedia, $mdSidenav) {
    var dives = [
      {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 30,
        time: 82,
        tags: ["shallow"]
      },
      {
        site: 'Small Giftun',
        location: 'Hurghada, Egypt',
        depth: 78,
        time: 54,
        tags: ["deep"]
      },
      {
        site: 'Fanous East',
        location: 'Hurghada, Egypt',
        depth: 38,
        time: 55,
        tags: ["shallow", "drift"]
      },
      {
        site: 'Umm Gamar',
        location: 'Hurghada, Egypt',
        depth: 102,
        time: 48,
        tags: ["deep", "wreck"]
      },
      {
        site: 'Paradise',
        location: 'Sharm El Sheikh, Egypt',
        depth: 34,
        time: 62,
        tags: ["shallow"]
      },
      {
        site: 'Near Garden',
        location: 'Sharm El Sheikh, Egypt',
        depth: 47,
        time: 43,
        tags: ["manta"]
      },
      {
        site: 'Far Garden',
        location: 'Sharm El Sheikh, Egypt',
        depth: 72,
        time: 48,
        tags: ["manta"]
      },
      {
        site: 'Shark & Yolanda Reef',
        location: 'Ras Mohamed, Egypt',
        depth: 49,
        time: 57,
        tags: ["drift", "wreck", "shark"]
      },
      {
        site: 'Dunraven',
        location: 'Ras Mohamed, Egypt',
        depth: 56,
        time: 49,
        tags: ["wreck"]
      },
      {
        site: 'Ponte Mahoon',
        location: 'Maehbourg, Mauritius',
        depth: 54,
        time: 38,
        tags: ["manta"]
      },
      {
        site: 'Shark Rock',
        location: 'Coco Beach, Mauritius',
        depth: 88,
        time: 32,
        tags: ["deep", "shark"]
      },
      {
        site: 'Urchin City',
        location: 'Coco Beach, Mauritius',
        depth: 39,
        time: 58,
        tags: ["shallow"]
      },
      {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        depth: 98,
        time: 62,
        tags: ["cave", "deep"]
      },
      {
        site: 'Ecsed Lake',
        location: 'Ecsed, Hungary',
        depth: 24,
        time: 102,
        tags: ["shallow", "lake"]
      },
      {
        site: 'Gyekenyes Lake',
        location: 'Ecsed, Hungary',
        depth: 31,
        time: 44,
        tags: ["shallow", "night", "lake"]
      }
    ];

    $scope.dives = dives;

    var tags = {};
    for (var i = 0; i < dives.length; i++) {
      if (!dives[i] || !angular.isArray(dives[i].tags)) {
        continue;
      }
      for (j = 0; j < dives[i].tags.length; j++) {
        var tag = dives[i].tags[j];
        if (tags[tag]) {
          tags[tag]++;
        } else {
          tags[tag] = 1;
        }
      }
    }

    var tagList = [];
    for (tag in tags) {
      tagList.push({
        name: tag,
        count: tags[tag],
        selected: false
      });
    }

    $scope.tags = tagList.sort(
      function(a, b) {
        return a.name < b.name
          ? -1
          : a.name > b.name ? 1 : 0;
      }
    );

    $scope.toggleTag = function(tag) {
      tag.selected = !tag.selected;
    };

    $scope.getFilteredDives = function() {
      var filterTags = getFilteredTags();
      var filteredDives = $scope.dives.filter(
        function(dive) {
          return filterTags.every(
            function(value){
              return dive.tags.indexOf(value.name) >= 0;
            });
        }
      );
      return filteredDives;
    };

    $scope.hideTagBar = function() {
      return tagsHidden();
    };

    $scope.enableShowTags = function() {
      return tagsHidden() && !$mdSidenav('tagsFilter').isOpen();
    };

    $scope.showTags = function() {
      $mdSidenav('tagsFilter').open();
    };

    $scope.enableCloseTags = function() {
      return tagsHidden() && $mdSidenav('tagsFilter').isOpen();
    };

    $scope.closeTags = function() {
      $mdSidenav('tagsFilter').close();
    };

    $scope.showFiltered = function() {
      return tagsHidden() && getFilteredTags().length > 0;
    };

    $scope.isFilterOn = function() {
      return getFilteredTags().length > 0;
    };

    function getFilteredTags() {
      return $scope.tags.filter(
        function(tag) {
          return tag.selected;
        });
      }

    function tagsHidden() {
       return !$mdMedia('gt-md');
    }
  }
})();