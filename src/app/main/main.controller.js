(function() {
  'use strict';

  angular
    .module('skyblockMap')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $http, $log) {
    var ctrl = this;

    ctrl.classAnimation = '';
    ctrl.creationDate = 1445486871367;
    ctrl.showToastr = showToastr;
    ctrl.islands = [];

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      ctrl.classAnimation = '';
    }

    function processIslands() {

      var min = { x: 10000000, z: 10000000 };
      var max = { x: -10000000, z: -10000000 };

      _.forEach(ctrl.islands, function(island) {
        min.x = Math.min(min.x, island.location.x);
        min.z = Math.min(min.z, island.location.z);
        max.x = Math.max(max.x, island.location.x);
        max.z = Math.max(max.z, island.location.z);
      });
      ctrl.rowCount = (max.z - min.z) / 150 + 1;
      ctrl.colCount = (max.x - min.x) / 150 + 1;
      $log.log('Calculated ' + ctrl.rowCount + ' rows and ' + ctrl.colCount + ' columns.');

      var rowData = [],
          currRow,
          rowIndex = min.z,
          colIndex = min.x;
      for (var row = 0; row < ctrl.rowCount; row++) {
        currRow = [];
        colIndex = min.x;
        for (var col = 0; col < ctrl.colCount; col++) {
          var isle = searchForIsland(colIndex, rowIndex) || { location: { x: colIndex, z: rowIndex } };
          if (isle.username) {
            if (isle.username === "SPAWN") {
              isle.avatar = 'http://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/c5/Grass.png';
            } else {
              isle.avatar = 'https://mcapi.ca/avatar/3d/'+isle.username+'/125';
            }
          } else {
          //  isle.avatar = 'http://hydra-media.cursecdn.com/minecraft.gamepedia.com/e/ee/Bedrock.png';
            isle.avatar = 'http://hydra-media.cursecdn.com/minecraft.gamepedia.com/9/9d/Xmas_chest.png';
            isle.username = 'unknown';
          }
          currRow.push(isle);
          colIndex += 150;
        }
        rowData.push(currRow);
        rowIndex += 150;
      }

      ctrl.gridData = rowData;
    }

    function searchForIsland(x, z) {
      var found = _.find(ctrl.islands, function(isle) {
        $log.log('Checking ' + isle.username + ': ' + isle.location.x + ',' + isle.location.z + ' against ' + x + ',' + z);
        return isle.location.x === x && isle.location.z === z;
      });
      if (found) $log.log('Found island ' + found.username);
      return found;
    }

    $http({
      method: 'GET',
      url: 'assets/map.json',
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      ctrl.islands = response.data.islands;
      processIslands();
    }, function(response) {
      // error
    });
  }


})();
