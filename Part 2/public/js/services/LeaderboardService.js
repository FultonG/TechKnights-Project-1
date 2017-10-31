angular.module('LeaderboardService', []).factory('Leaderboard', ['$http', function($http) {

    return {
        addUser : function(user) {
            return $http.post('/addUser', user);
        },

        getUsers : function() {
          return $http.get('data');
        }
    }

}]);
