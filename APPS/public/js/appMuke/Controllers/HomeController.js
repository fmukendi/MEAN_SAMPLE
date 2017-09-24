(function () {
    "use strict";

    var app = angular.module("appMuke");

    var HomeController = function ($scope
                                   ) {
       
        $scope.userDisplayName = "Franck Mukendi";
    };

    app.controller("HomeController", HomeController); //

}());