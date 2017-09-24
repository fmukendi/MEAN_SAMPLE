(function () {
    "use strict";

    var app = angular.module("appMuke");

    var PopUpMainController = function ($scope, parentScope, $uibModalInstance, APP_MSG, APP_SETTINGS,
                                             item, MODELS_EMAIL,$inputMainDataCleaner, $filter,$alertServ ) {


        $scope.emails = {
            data: []
        };

        $scope.emails.data = angular.copy(parentScope.emails.data);

        var isUpdate = item.isUpdate;

        $scope.email = angular.copy(MODELS_EMAIL.EmailModel);

        if (isUpdate === true) {
            $scope.SaveBtn = 'Update Changes';
            $scope.email.id = item.data.id;
            $scope.email.name = item.data.name;
        } else {
            $scope.SaveBtn = 'Save Changes';
            //$scope.email.id = item.id;
            //$scope.email.name = item.name;
        }

        $scope.cancelForm = function () {
            $modalInstance.dismiss();
        };

        $scope.Save = function (action, state) {
            $scope.$broadcast('show-errors-event');
            var isValid = false;
            var isDuplicate = false;
            var data = angular.copy(parentScope.emails.data);
            var search = $filter('filter')(data, { name: angular.copy($scope.email.name) });
            if (search.length === 0 ) {
              isValid = true;
            }else{
              isDuplicate = true;
            }
            
            if ($scope.MainSubForm.$valid && isValid === true) {

                //push data 
                if (isUpdate === false) {
                    parentScope.emails.data.push(angular.copy($scope.email));
                    data = angular.copy(parentScope.emails.data);
                    parentScope.emails.data = $inputMainDataCleaner.updateLineNumber(data);
                } else {
                    for (var x = 0 ; x < parentScope.emails.data.length ; x++) {
                        if (parentScope.emails.data[x].id == $scope.email.id) {
                            parentScope.emails.data[x] = angular.copy($scope.email);
                        }
                    }
                }


                // Close the modal Pop Up 
                $uibModalInstance.close();

            } else {
                var msg = APP_MSG.invalidData;
                    
                if($scope.MainSubForm.$valid === false ){
                  msg = msg + '(Invalid Email Format!!!)';
                }else{
                  msg = msg + '(Duplicate Error !!!)';
                }
                $alertServ.popToaster(APP_SETTINGS.PoPerror, APP_MSG.Title, msg);
                return;
            }
        }

    };

    app.controller("PopUpMainController", PopUpMainController); //

}());