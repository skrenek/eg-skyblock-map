(function() {
  'use strict';

  angular
    .module('skyblockMap')
    .directive('islandTile', islandTile);

  /** @ngInject */
  function islandTile() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/island-tile/island-tile.html',
      controller: IslandTileController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function IslandTileController($scope, $log) {
      var ctrl = this;

      ctrl.isle = $scope.isle;
      $log.log('Isle is ' + ctrl.isle.username);
    }
  }

})();
