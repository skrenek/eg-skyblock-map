(function() {
  'use strict';

  angular
    .module('skyblockMap')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
