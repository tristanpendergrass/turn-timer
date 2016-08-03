angular.module('turnTimer')
.filter('millisecondsLabel', function() {
  return function(input) {
    var date = new Date(1970, 0, 1);
    if (input > 0) {
      date.setMilliseconds(input);
    }

    return date.getMinutes() + 'm ' + date.getSeconds() % 60 + 's ' + date.getMilliseconds() % 1000 + 'ms';
  };
});
