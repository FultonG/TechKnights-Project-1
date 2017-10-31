angular.module('SignInService', []).factory('SignIn', ['$http', function($http) {

    return {
        SignIn : function(user) {
            return $http.post('/signin', user);
        }
    }

}]);
