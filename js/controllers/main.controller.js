angular.module('turnTimer')
.controller('main', function($scope) {
  $scope.players = [
    { name: 'Player #1', timeLeft: 120000 },
    { name: 'Player #2', timeLeft: 120000 },
    { name: 'Player #3', timeLeft: 120000 },
    { name: 'Player #4', timeLeft: 120000 }
  ];

  $scope.deletePlayer = function(player) {
    $scope.players.splice($scope.players.indexOf(player), 1);
  };

  $scope.addPlayer = function() {
    const playerNumber = $scope.players.length + 1;
    $scope.players.push({
      name: 'Player #' + playerNumber,
      timeLeft: 120000
    });
  }
});
