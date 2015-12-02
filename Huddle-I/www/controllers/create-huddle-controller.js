angular
  .module('createHuddleCtrl', [])
  .controller('CreateHuddleCtrl', [
    'HuddleService',
    '$scope',
    '$state',
    '$stateParams',
    CreateHuddleCtrl
  ]);

function CreateHuddleCtrl(HuddleService,
                           $scope,
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
  $scope.numberOfPeople = 0;
  $scope.huddleTypes = ["Academic", "Social"];

  $scope.updateHuddleType = function(index) {
    $scope.huddleType = $scope.huddleTypes[index];
  }

  $scope.updateExpirationTime = function() {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months =["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var date = getExpirationDate($scope.hours);
    $scope.expirationTime = days[date.getDay()] + ", "
                            + months[date.getMonth()] +" "
                            + date.getDate() + ", " 
                            + date.getHours() + ":" 
                            + date.getMinutes();
  }

  $scope.decrementPeople = function() {
    if ($scope.numberOfPeople > 1) {
      $scope.numberOfPeople = parseInt($scope.numberOfPeople) - 1; 
    }
  }

  var getExpirationDate = function(h) {    
    var today = new Date();
    today.setTime(today.getTime() + (h*60*60*1000));
    return today;
  }

  $scope.createHuddle = function() {
    var newHuddle = {}
    newHuddle.name = $scope.name;
    newHuddle.description = $scope.description;
    newHuddle.numberOfPeople = parseInt($scope.numberOfPeople);
    newHuddle.huddleType = $scope.huddleType;
    newHuddle.location = $scope.location;
    newHuddle.lifeTime = getExpirationDate(parseInt($scope.hours));
    if (newHuddle.numberOfPeople <= 1) {
      if (newHuddle.huddleType == "Academic") {
        newHuddle.ownerSpiritAnimal = "./img/academicPair.png";
      } else {
        newHuddle.ownerSpiritAnimal = "./img/socialPair.png";
      }
    }
    else {
      if (newHuddle.huddleType == "Academic") {
        newHuddle.ownerSpiritAnimal = "./img/academicGroup.png";
      } else {
        newHuddle.ownerSpiritAnimal = "./img/sociaGroup.png";
      }
    }

    HuddleService.createHuddle(newHuddle, function(err, status, data) {
      if (!err) { 
        console.log(data);
      }
    });
  }
}