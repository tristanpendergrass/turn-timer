angular.module('turnTimer')
.controller('main', function($scope) {
  $scope.players = [
    { name: 'Player #1' },
    { name: 'Player #2' },
    { name: 'Player #3' },
    { name: 'Player #4' }
  ];

  $scope.deletePlayer = function(player) {
    $scope.players.splice($scope.players.indexOf(player), 1);
  };
});
