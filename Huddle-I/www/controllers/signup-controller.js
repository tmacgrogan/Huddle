angular
  .module('SignupCtrl', [])
  .controller('SignupCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    SignupCtrl
  ]);

function SignupCtrl($scope,
                           $rootScope,
                           $timeout,
                           $state,
                           $stateParams) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter ev1111ent:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.huddleTypes = ["Academic", "Social"];
}