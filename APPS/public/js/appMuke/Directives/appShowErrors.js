(function (module) {

    var setupDom = function (element, form, scope) {

        var required = true;
        var formName = form.$name;

        // get elements
        var input = element.querySelector("input, textarea, select");
        var label = element.querySelector("label");
        var p = element.querySelector("p");
        var span = element.querySelector("span");
        var button = element.querySelector("button");

        var input;
        var name;
        var id;
        var boolisDate;
        var boolisTime;
        if (input != null && input != undefined) {

             type = input.getAttribute("type");
             name = input.getAttribute("name");
             id = input.getAttribute("id");
        } 

        // add bootstrap class
        if (type !== "checkbox" && type !== "radio" && ( !boolisDate && !boolisTime)) {
            if (input != null && input != undefined) {

                input.classList.add("form-control");
                input.classList.add("input-sm");
            }
            

            if (label != null && label != undefined) label.classList.add("control-label");

        }


        // bootstrap columns size based on the name 
       
        var inpuColSize = 'col-sm-7';
        var labelColSize = 'col-sm-5';

        if (type == "checkbox") {
            inpuColSize = 'col-sm-8';
            labelColSize = 'col-sm-4';
        }

        if (true) {
            if (input != null && input != undefined) {

                input.classList.add(inpuColSize);
            }
            

            if (label != null && label != undefined) label.classList.add(labelColSize);
        }



        // add * where ever required is 
        if (input != null && input != undefined ) {

            if (form[name].$validators != null && form[name].$validators != undefined) {
                if (form[name].$validators.required != null) {

                    if (label != null && label != undefined && required ) label.classList.add("required");
                }
            }
        }

        return name;
    };

    var addMessages = function (form, element, name, $compile, scope) {

        var messages;

        if (false) {
            //Validation messages -- with Full Messages 
            messages = "<div ng-messages='" +
            form.$name + "." + name + ".$error" +
            "' ng-if='" + form.$name + "." + name + ".$error'" + ">" + "<div ng-messages-include='" + ajaxHtml.TemplateMessages + "'></div></div>";
        } else {
            //Validation messages -- with No Messages 
            messages = "<div ng-messages='" +
            form.$name + "." + name + ".$error" +
            "' ng-if='" + form.$name + "." + name + ".$error ' " + ">" + "<div ng-messages-include='" + ajaxHtml.TemplateHiddenMessages + "'></div></div>";
        }


        //Compile validation messages and append to element
        element.append($compile(messages)(scope));

    };

    // return whether or not the form is valid 
    var watcherFor = function (form, name) {
        return function () {
                return form[name].$invalid;
        };
    };

    // update the class of the element based on validation
    var updateFor = function (element, form, name, scope) {

        return function (hasError) {

            if (form.$name == "MainForm") {
                if (scope.MainForm.$dirty) { // only do the update when the form is dirty or when user has started to interact with the form.
                    if (hasError) {

                        element.removeClass("has-success").addClass("has-error");
                    } else {
                        element.removeClass("has-error");//element.removeClass("has-error").addClass("has-success") --> has success turn to green
                    }
                }
            }else if (form.$name == "MainSubForm") {
                if (scope.MainSubForm.$dirty) { // only do the update when the form is dirty or when user has started to interact with the form.
                    if (hasError) {

                        element.removeClass("has-success").addClass("has-error");
                    } else {
                        element.removeClass("has-error");//element.removeClass("has-error").addClass("has-success") --> has success turn to green
                    }
                }
            }
        }
    };



    // show all errors in the form
    var broadCastErrors = function (form, element, name, scope) {

        scope.$on('show-errors-event', function () {

            element.toggleClass('has-error', form[name].$invalid);
        });

    };

    // Hide  all errors 
    var broadCastHideErrors = function (form, element, name, scope, $timeout) {

        scope.$on('hide-errors-event', function () {

            $timeout(function () {
                element.removeClass('has-error');
            }, 0, false);
        });

    };

    var link = function ($compile, $timeout) {
        return function (scope, element, attributes, form) {
            var name = setupDom(element[0], form, scope); // add bootstroop class
            //addMessages(form, element, name, $compile, scope); // validation error message text
            scope.$watch(watcherFor(form, name), updateFor(element, form, name, scope)); //watch for a form and update it  hasError class based on user input
            broadCastErrors(form, element, name, scope); //broadcast  Show errors 
            broadCastHideErrors(form, element, name, scope, $timeout); //broadcast Hide errors 
        };
    };


    var appShowErrors = function ($compile, $timeout) {
        return {
            restrict: "A", // Attribute 
            require: "^form",
            link: link($compile, $timeout) // do the work
        };


    };

    module.directive('appShowErrors', appShowErrors);

})(angular.module("appMuke"));