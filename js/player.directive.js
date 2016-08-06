angular.module('turnTimer').directive('player', function($interval) {
  return {
    restrict: 'E',
    templateUrl: 'templates/player.html',
    link: function($scope) {
      $scope.timeLeft = 10000;

      $scope.$watch('timeLeft', function(timeLeft) {
        if (timeLeft < 0) {
          $scope.timeLeft = 0;
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
          const mark = new Date(now + $scope.timeLeft);

          $scope.countdown = $interval(function() {
            $scope.timeLeft = mark.getTime() - new Date().getTime();

            if ($scope.timeLeft < 1) {
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
