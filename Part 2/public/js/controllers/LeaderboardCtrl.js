//create a new controller for the Leaderboard page. we will later link it with the leaderboard view in the appRoutes
angular.module('LeaderboardCtrl', []).controller('LeaderboardController', function($scope, Leaderboard) {

    //value of the title variable within the scope of the LeaderboardController
    $scope.title = 'TechKnights Leaderboard';

    $scope.persons = [
      {
        first : "Fulton",
        last : "Garcia",
        email: "Fulton@knights.ucf.edu",
        points: 2
      },
      {
        first : "Perla",
        last : "Del Castillo",
        email: "perlitadelcastillo@gmail.com",
        points: 5
      }
    ];

    $scope.plus = function(person){
      person.points++;
    }

    $scope.minus = function(person){
      if(person.points > 0)
        person.points--;
    }

    $scope.add = function(){
      if($scope.user){
        console.log(Leaderboard.addUser($scope.user, ));
        $scope.user = '';
        console.log(Leaderboard.getUsers());
      }
    }

});
