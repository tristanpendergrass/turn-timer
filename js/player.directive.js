angular.module('turnTimer').directive('player', function($interval) {
  return {
    restrict: 'E',
    templateUrl: 'templates/player.html',
    link: function($scope) {
      $scope.timeLeft = 10000;

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

      $scope.reset = function() {
        $scope.timeLeft = 10000;
      };
    },
    scope: {
      player: '='
    }
  };
});
