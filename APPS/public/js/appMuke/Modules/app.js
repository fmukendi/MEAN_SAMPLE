


(function () {
    "use strict";
    var app = angular.module("appMuke", ["ui.router", "ui.bootstrap", "ngAnimate",
               "toastr", "ngTouch", 'ngSanitize']);
         
   
    app.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 1,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: true,
            target: 'body',
            progressBar: true,
            closeButton: true
        });
    });

    app.config(["$stateProvider",
      "$urlRouterProvider",
      function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');

          $stateProvider
            .state('home', {
                url: '/',
                cache: false,
                templateUrl: '/main',
                controller: "MainController as ctrl"
            })
        }
    ]);

    

}());