//create a new controller for the Leaderboard page. we will later link it with the leaderboard view in the appRoutes
angular.module('LeaderboardCtrl', []).controller('LeaderboardController', function($scope) {

    //value of the title variable within the scope of the LeaderboardController
    $scope.title = 'TechKnights Leaderboard';

});
