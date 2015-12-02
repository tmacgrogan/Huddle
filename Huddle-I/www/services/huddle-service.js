var huddle = angular.module("huddleService", []);

huddle.service('HuddleService', ['$http', function($http) {
    this.getHuddles = function(json, callback) {
        var req = {
            method: "GET",
            url: "http://gthuddle.cloudapp.net/huddles",
            body: json
        }

        $http.get('http://gthuddle.cloudapp.net/huddles').success(function(data, status) {
            callback(null, status, data);
        });
    };

    this.getHuddleByID = function(id, callback) {
        var url = "http://gthuddle.cloudapp.net/huddles/" + id; 
        $http.get(url).success(function(data, status) {
            callback(null, status, data);
        });
    };
    
    this.createHuddle = function(json, callback) {
        var req = {
            method: "POST",
            url: "http://gthuddle.cloudapp.net/create",
            data: json
        }

        $http(req).success(function(data, status) {
            callback(null, status, data);
        }).error(function(data, status) {
            callback(status, data);
        });
    };
}]);
