(function () {
    "use strict";

    var app = angular.module("appMuke");

    var MainController = function ($scope, $http, $filter, $uibModal, $log, APP_SETTINGS,
                                    $inputMainDataServ , APP_URLS, $inputMainDataCleaner
                                   ) {
       var intiMainPageData = function () {

            $scope.emails = {
                data: []
            };
            
            $scope.emails.data = $inputMainDataServ.getServerEmailList();

        }
       
       $scope.initCreate = function (response) {

            intiMainPageData();
        } 
        
        // PopUps 
        
        
        $scope.removeItem = function (index) {
                $scope.emails.data.splice(index, 1);

                var data = angular.copy($scope.emails.data);

                $scope.emails.data = $inputMainDataCleaner.updateLineNumber(data);
            
        }


        $scope.popNew = function () {

            var item = {
                isUpdate: false
            }

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl:  APP_URLS.EditEmail,
                controller: APP_SETTINGS.PopUpMainController,
                size: APP_SETTINGS.PopUpSizeMainDeleterConfirm,
                backdrop: APP_SETTINGS.PopUpBackDropStatic,
                controllerAs: APP_SETTINGS.PopUpControllerAliasName,
                resolve: {
                    item: function () {
                        return item;
                    },
                    parentScope: function () {
                        return $scope;
                    }
                },
                windowClass: 'app-modal-window'
            });

        };

    };

    app.controller("MainController", MainController); //

}());