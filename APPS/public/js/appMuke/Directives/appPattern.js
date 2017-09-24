(function (module) {
    /*
    
    ALPHA ONLY & Lower case only  <input type="text" app-pattern="[a-zA-Z]" />

    ALPHA ONLY & Lower case only  <input type="text" app-pattern="[a-z]" />
  
    NUMBER ONLY <input type="text" gems-pattern="\d" />
  
    ALPHANUMERIC ONLY <input type="text" gems-pattern="(\d|[a-z])" />
  
    WHITESPACE CHARACTERS ONLY <input type="text" app-pattern="\W" />
  
    ABCDEFG ONLY <input type="text" app-pattern="[ABCDEFG]" />

    */

    var compile = function () {
        return function (tElement, tAttrs) {
            return function (scope, element, attrs) {
                // I handle key events
                element.bind("keypress", function (event) {
                    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
                    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.

                    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
                    if (!keyCodeChar.match(new RegExp(attrs.gemsPattern, "i"))) {
                        event.preventDefault();
                        return false;
                    }

                });
            }
        };
    };


    var gemsPattern = function ($compile) {
        return {
            require: 'ngModel',
            restrict: 'A',
            compile: compile()
        };
    };

    module.directive('appPattern', gemsPattern);

})(angular.module("appMuke"));