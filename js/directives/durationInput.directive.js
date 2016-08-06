angular.module('turnTimer')
.directive('durationInput', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'templates/durationInput.html',
    link: function(scope) {
      scope.durationString = '2 minutes 30 s';

      scope.$watch('durationString', function(durationString) {
        if (durationString !== undefined) {
          scope.value = parse(durationString);
        }
      });
    },
    scope: {
      value: '='
    }
  };
});
