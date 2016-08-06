angular.module('turnTimer')
.controller('main', function($scope, $mdDialog) {
  $scope.players = [];

  $scope.deletePlayer = function(player) {
    $scope.players.splice($scope.players.indexOf(player), 1);
  };

  $scope.addPlayer = function() {
    const playerNumber = $scope.players.length + 1;
    $scope.players.push({
      name: 'Player #' + playerNumber,
      timeLeft: 150000
    });
  }

  $scope.reset = function(event, duration) {
    const confirm = $mdDialog.confirm()
      .title('Confirm Reset')
      .textContent('Are you sure you want to reset all the timers?')
      .ariaLabel('confirm reset')
      .targetEvent(event)
      .ok('Yes')
      .clickOutsideToClose(true)
      .cancel('No');

    $mdDialog.show(confirm).then(function() {
      $scope.players.forEach(function(player) {
        player.timeLeft = duration;
      });
    });
  };

  $scope.addPlayer();
  $scope.addPlayer();
  $scope.addPlayer();
  $scope.addPlayer();
});
