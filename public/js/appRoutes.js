angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // workshops page
    .when('/workshops', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopController'
    })
    
    //leaderboard page
    .when('/leaderboard', {
      templateUrl: 'views/leaderboard.html',
      controller: 'LeaderboardController'
    });

$locationProvider.html5Mode(true);

}]);
