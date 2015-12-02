angular
  .module('FilterHuddleCtrl', [])
  .controller('FilterHuddleCtrl', [
    'HuddleService',
    '$scope',
    FilterHuddleCtrl
  ]);

function FilterHuddleCtrl(HuddleService,
                           $scope,
                           $rootScope,
                           $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter ev1111ent:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.huddleTypes = ["Academic", "Social"];
  $scope.options = ["Pair", "Group"];

  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var months =["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  $scope.decrementPeople = function() {
    if ($scope.numberOfPeople > 1) {
      $scope.numberOfPeople = parseInt($scope.numberOfPeople) - 1; 
    }
  }  

  $scope.updateExpirationTime = function() {
    var date = getExpirationDate($scope.hours);
    $scope.expirationTime = date;
  }

  var getExpirationDate = function(h) {    
    var today = new Date();
    today.setTime(today.getTime() + (h*60*60*1000));
    var expirationTime = days[today.getDay()] + ", "
                            + months[today.getMonth()] +" "
                            + today.getDate() + ", " 
                            + today.getHours() + ":" 
                            + today.getMinutes();
    return expirationTime;
  }

  $scope.updateOption = function(index) {
    $scope.pairOrGroup = index;
  }

  $scope.updateHuddleType = function(index) {
    $scope.huddleType = index;
  }

  $scope.filterHuddles = function() {
    var query = "";
    console.log($scope.pairOrGroup);
    if ($scope.pairOrGroup != undefined && $scope.huddleType != undefined) {
      query = query + "pairOrGroup=" + $scope.pairOrGroup + "&huddleType=" + $scope.huddleType;
    }
    else if ($scope.pairOrGroup != undefined) {
      query = query + "pairOrGroup=" + $scope.pairOrGroup;
    }
    else if(typeof($scope.huddleType) != undefined)  {
      query = query + "huddleType=" + $scope.huddleType;
    }
    HuddleService.filterHuddles(query, function(err, status, data) {
      if (!err) { 
        console.log(data);
      }
    });
  }
}