(function () {


    var $inputMainDataCleaner = function ($filter) {

        var updateLineNumber = function (data) {

            var count = 1;
            angular.forEach(data, function (value, index) {

                data[index].id = count;

                count++;
            });

            return data;
        }


        return {
            updateLineNumber: updateLineNumber
        };
    };

    var module = angular.module("appMuke");

    module.factory("$inputMainDataCleaner", $inputMainDataCleaner);

}());