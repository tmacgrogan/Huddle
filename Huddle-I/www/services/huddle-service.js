var huddle = angular.module("huddleService", []);

huddle.service('HuddleService', ['$http', function($http) {
    this.getHuddles = function(json, callback) {
        var req = {
            method: "GET",
            url: "http://localhost:8080/huddles",
            body: json
        }

        $http.get('http://localhost:8080/huddles').success(function(data, status) {
            callback(null, status, data);
        });
    };

    this.createHuddle = function(json, callback) {
        var req = {
            method: "POST",
            url: "http://localhost:8080/create",
            data: json
        }

        $http(req).success(function(data, status) {
            callback(null, status, data);
        }).error(function(data, status) {
            callback(status, data);
        });
    };
}]);
