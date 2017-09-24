(function () {


    var $inputMainDataServ = function ($http, $log, $q) {

        // $http calls 

        var getServerEmailList = function () {
            var emails = {
                data: [
                        //{
                        //    id: "0",
                        //    name: "Select..."
                        //},
                        {
                            id:1,
                            name: "franck.mukendi@gmail.com"
                        },
                        {
                            id: 2,
                            name: "franck@gmail.com"
                        },
                        {
                            id: 3,
                            name: "mukendi@gmail.com"
                        },
                        {
                            id: 4,
                            name: "mukeapps@gmail.com"
                        }
                ]
            };
            return emails.data;
        };

        return {

            getServerEmailList: getServerEmailList
        };


    };

    var module = angular.module("appMuke");

    module.factory("$inputMainDataServ", $inputMainDataServ);

}());

