// Code goes here
(function () {
    "use strict";

    var app = angular.module("appMuke");

    app.constant('APP_MSG', {

        //Global
        currencyIsDisabled : true,

        //App Mesage
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized',
        duplicateError: 'Duplicate Error !!!',
        SuccessSave: 'Data has been saved. ',
        gemsError: 'Application Error',
        crashError: 'AppMuke has generated an error !!! Please contact Apple Broker System Support ',
        dataError: 'Could not fecth the data.',
        invalidData: 'The page contains invalid data.',
        entryLock: 'This entry is locked by another user.',
        deleteSuccess: 'The user was successfully deleted',
        deleteNoSuccess: 'The user was not deleted',
        userAlreadyExist: 'User Already exist',
        UpdatedSuccess: 'The user was successfully updated',
        AddedSuccess: 'The user was successfully added',
       

        //BrokerageController
        Title: 'Emails ',
        Subject: 'Emails Message'
        

    })

}());
