var app = angular.module('turnTimer', ['ngMaterial'])
.controller('main', function($scope) {
  $scope.players = [
    { name: 'Player #1' },
    { name: 'Player #2' },
    { name: 'Player #3' },
    { name: 'Player #4' }
  ];
});
