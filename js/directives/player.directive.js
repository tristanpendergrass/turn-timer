angular.module('turnTimer').directive('player', function($interval) {
  return {
    restrict: 'E',
    templateUrl: 'templates/player.html',
    link: function($scope) {
      $scope.$watch('player.timeLeft', function(timeLeft) {
        if (timeLeft < 0) {
          $scope.player.timeLeft = 0;
        } else if (timeLeft > 35999999) {
          $scope.player.timeLeft = 35999999;
        } else {
          $scope.hours = Math.floor(timeLeft / 1000 / 60 / 60);
          $scope.minutes = Math.floor(timeLeft / 1000 / 60 % 60);
          $scope.seconds = Math.floor((timeLeft / 1000) % 60);
          $scope.milliseconds = Math.floor(timeLeft % 1000);
        }
      });

      $scope.toggle = function() {
        if ($scope.inProgress) {
          $interval.cancel($scope.countdown);
          $scope.inProgress = false;
        } else {
          const now = Date.parse(new Date());
          const mark = new Date(now + $scope.player.timeLeft);

          $scope.countdown = $interval(function() {
            $scope.player.timeLeft = mark.getTime() - new Date().getTime();

            if ($scope.player.timeLeft < 1) {
              $interval.cancel($scope.countdown);
              $scope.inProgress = false;
            }
          }, 1);

          $scope.inProgress = true;
        }
      };
    },
    scope: {
      player: '=',
      onDelete: '&'
    }
  };
});
