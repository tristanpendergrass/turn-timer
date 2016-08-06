angular.module('turnTimer').directive('addPlayer', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/addPlayer.html',
    scope: {
      addPlayer: '&'
    }
  };
});
