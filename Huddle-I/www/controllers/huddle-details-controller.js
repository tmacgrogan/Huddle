angular
  .module('huddleDetailsCtrl', [])
  .controller('HuddleDetailsCtrl', [
    'HuddleService',
    '$scope',
    '$stateParams',
    HuddleDetailsCtrl
  ]);

function HuddleDetailsCtrl(HuddleService,
                           $scope,
                           $stateParams) {

  var huddleID = $stateParams.huddleId;
  HuddleService.getHuddleByID(huddleID, function(err, status, data) {
    if (!err) { 
      console.log(data); //HUDDLETYPE IN TEMPLATE. NOT IMPLEMENTED RIGHT NOW. 
      data.type = data.huddleType ? 'Social' : 'Academic';
      $scope.huddle = data;
    }
  });
};