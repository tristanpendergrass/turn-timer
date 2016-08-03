angular.module('turnTimer').directive('player', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/player.html',
    link: function($scope) {
      $scope.timeLeft = '1000';
    },
    scope: {
      player: '='
    }
  };
});
