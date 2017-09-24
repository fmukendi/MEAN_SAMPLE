// Code goes here
(function () {
    "use strict";

    var app = angular.module("appMuke");

    app.constant('APP_SETTINGS', {

        //cssClass 
        PopUpMainClass: 'app-modal-window',
        PopUpBackDropStatic: 'static',
        PopUpControllerAliasName: 'vm',
        descOrderClass: 'fa fa-toggle-up',
        ascOrderClass: 'fa fa-toggle-down',
        //Popup 
        PoPsuccess: 'success',
        PoPerror: 'error',
        PoPwarning: 'warning',
        //Time
        datePicker: 'MM/dd/yyyy',
        timePicker: 'HH:mm',
        //TimeOut
        LongWait: 1000,
        MediumWait: 500,
        ShortWait: 250,

        //Main
        PopUpSizeMainDeleterConfirm: 'md',
        PopUpMainDeleteController: 'PopUpMainController',
        PopUpMainController: 'PopUpMainController',
        
        //LogOut
        LogOutController: 'LogOutController'
    })

}());
