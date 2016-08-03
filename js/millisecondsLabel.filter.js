angular.module('turnTimer')
.filter('millisecondsLabel', function() {
  return function(input) {
    return '3:00';
  };
});
