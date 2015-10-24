!function(){"use strict";angular.module("skyblockMap",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(t){var a=this;a.relativeDate=t(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],a}angular.module("skyblockMap").directive("navbar",t)}(),function(){"use strict";function t(){function t(t,a){var n=this;n.isle=t.isle,a.log("Isle is "+n.isle.username)}var a={restrict:"E",templateUrl:"app/components/island-tile/island-tile.html",controller:t,controllerAs:"ctrl",bindToController:!0};return t.$inject=["$scope","$log"],a}angular.module("skyblockMap").directive("islandTile",t)}(),function(){"use strict";function t(t,a,n,e){function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){var t={x:1e7,z:1e7},a={x:-1e7,z:-1e7};_.forEach(l.islands,function(n){t.x=Math.min(t.x,n.location.x),t.z=Math.min(t.z,n.location.z),a.x=Math.max(a.x,n.location.x),a.z=Math.max(a.z,n.location.z)}),l.rowCount=(a.z-t.z)/150+1,l.colCount=(a.x-t.x)/150+1,e.log("Calculated "+l.rowCount+" rows and "+l.colCount+" columns.");for(var n,o=[],r=t.z,s=t.x,c=0;c<l.rowCount;c++){n=[],s=t.x;for(var u=0;u<l.colCount;u++){var d=i(s,r)||{location:{x:s,z:r}};d.username?"SPAWN"===d.username?d.avatar="http://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/c5/Grass.png":d.avatar="https://mcapi.ca/avatar/3d/"+d.username+"/125":(d.avatar="http://hydra-media.cursecdn.com/minecraft.gamepedia.com/e/ee/Bedrock.png",d.username="unknown"),n.push(d),s+=150}o.push(n),r+=150}l.gridData=o}function i(t,a){var n=_.find(l.islands,function(n){return e.log("Checking "+n.username+": "+n.location.x+","+n.location.z+" against "+t+","+a),n.location.x===t&&n.location.z===a});return n&&e.log("Found island "+n.username),n}var l=this;l.classAnimation="",l.creationDate=1445486871367,l.showToastr=o,l.islands=[],n({method:"GET",url:"/assets/map.json",headers:{Accept:"application/json"}}).then(function(t){l.islands=t.data.islands,r()},function(t){})}angular.module("skyblockMap").controller("MainController",t),t.$inject=["$timeout","toastr","$http","$log"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("skyblockMap").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,a){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"ctrl"}),a.otherwise("/")}angular.module("skyblockMap").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("skyblockMap").constant("moment",moment)}(),function(){"use strict";function t(t,a,n){t.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0,n.theme("default").primaryPalette("green",{"default":"900"}).accentPalette("grey")}angular.module("skyblockMap").config(t),t.$inject=["$logProvider","toastrConfig","$mdThemingProvider"]}(),angular.module("skyblockMap").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="column" layout-fill=""><md-content><header><navbar creation-date="ctrl.creationDate"></navbar></header><section class="md-padding"><p><strong>{{ctrl.islands.length}} islands have been submitted.</strong></p><div class="island-grid"><div class="row" ng-repeat="row in ctrl.gridData"><div class="island-tile" ng-repeat="isle in row" data-coords="{{isle.location.x}}, {{isle.location.z}}"><img ng-src="{{isle.avatar}}" class="{{isle.username}}"><p>{{isle.username}}</p><p>{{isle.location.x}}, {{isle.location.z}}</p></div></div></div></section><footer class="md-padding md-caption"><a href="http://www.minecraft.net">Minecraft</a> is copyright <a href="http://www.mojang.com">Mojang</a> and is not affiliated with this site. <a href="http://www.endgameserver.com">End Game</a>, it\'s site, and its server copyright &copy; End Game and is not affiliated with this site.</footer></md-content></div>'),t.put("app/components/island-tile/island-tile.html",'<div class="island-tile" data-coords="{{ctrl.isle.location.x}}, {{ctrl.isle.location.z}}">{{ctrl.isle.username}}</div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="#">End Game Skyblock Island Map</md-button><section flex="" layout="row" layout-align="left center"><md-button flex="15" class="md-raised md-primary md-hue-1" href="http://www.endgameserver.com" target="_blank">Visit End Game</md-button><md-button flex="15" class="md-raised md-primary md-hue-1" href="http://www.endgameserver.com/forum/m/4480316/viewthread/24492606-skyblock-map-experiment" target="_blank">Submit Your Island</md-button></section></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-6e895d7c66.js.map
