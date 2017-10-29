angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
      //tells the app to use the home view as a template
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // workshops page
    .when('/workshops', {
      //tells the app to use the workshop view as a template
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopController'
    })

    //leaderboard page
    .when('/leaderboard', {
      //tells the app to use the leaderboard view as a template
      templateUrl: 'views/leaderboard.html',
      controller: 'LeaderboardController'
    });

$locationProvider.html5Mode(true);

}]);
