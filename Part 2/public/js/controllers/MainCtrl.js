//create a new controller for the home page. we will later link it with the home view in the appRoutes

angular.module('MainCtrl', []).controller('MainController', function($scope) {

    //value of the title variable within the scope of the MainController
    $scope.title = 'Up Coming Events';

});
