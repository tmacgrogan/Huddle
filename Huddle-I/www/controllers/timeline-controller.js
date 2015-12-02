angular
  .module('timelineCtrl', [])
  .controller('TimelineCtrl', [
    'HuddleService',
    '$scope',
    TimelineCtrl
  ]);

function TimelineCtrl(HuddleService,
                     $scope,
                     $rootScope,
                     $timeout) {
  var json = {}, huddles;
  HuddleService.getHuddles(json, function(err, status, data) {
    if (!err) { 
      console.log(data);
      $scope.huddles = data;
    }
  });
}