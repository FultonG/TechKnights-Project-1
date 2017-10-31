//create a new controller for the workshop page. we will later link it with the workshop view in the appRoutes
angular.module('SignInCtrl', []).controller('SignInController', function($scope, SignIn) {

    //value of the title variable within the scope of the WorkshopController
    $scope.title = 'Please sign in';

    $scope.submit = function(){
      console.log(SignIn.SignIn($scope.user));
    }

});
