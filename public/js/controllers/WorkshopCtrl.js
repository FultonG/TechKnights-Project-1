//create a new controller for the workshop page. we will later link it with the workshop view in the appRoutes
angular.module('WorkshopCtrl', []).controller('WorkshopController', function($scope) {

    //value of the title variable within the scope of the WorkshopController
    $scope.title = 'List of TechKnights Workshops'

});
