angular.module('turnTimer')
.filter('leftPadZeroes', function() {
  return function(input, targetLength) {
    const initial = '' + input;
    const zeroesToAdd = targetLength - initial.length;

    return zeroesToAdd > 0 ?
      '0'.repeat(zeroesToAdd) + initial :
      initial;
  };
});
