(function () {


    var $alertServ = function ($http, $log, $q, toastr) {

        var popToaster = function (type, title, text) {

            if (type == 'success') {
                toastr.success(text, title);

            } else if (type == 'error') {
                toastr.error(text, title);
            } else if (type == 'warning') {
                toastr.error(text, title);
            } else {
                toastr.error(text, title);
            }

        };

        return {
            popToaster: popToaster
        };


    };

    var module = angular.module("appMuke");

    module.factory("$alertServ", $alertServ);

}());
