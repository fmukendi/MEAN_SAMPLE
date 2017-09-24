// Code goes here
(function () {
    "use strict";

    var app = angular.module("appMuke");

    var EmailModel= {
        id: null,
        email: null
    }
       
    app.constant('MODELS_EMAIL', {

        //Main
        EmailModel: EmailModel
    })

}());
