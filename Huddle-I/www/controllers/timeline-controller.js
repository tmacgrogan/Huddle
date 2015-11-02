angular
  .module('timelineCtrl', [])
  .controller('TimelineCtrl', [
    'HuddleService',
    '$scope',
    '$state',
    '$stateParams',
    TimelineCtrl
  ]);

function TimelineCtrl(HuddleService,
                     $scope,
                     $rootScope,
                     $timeout,
                     $state,
                     $stateParams) {
  var json = {}, huddles;
  HuddleService.getHuddles(json, function(err, status, data) {
    if (!err) { 
      console.log(data);
      $scope.huddles = data;
    }
  });
}