//= require 'STDLIB/toObject'
//= require 'STDLIB/splitString'

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function filter(fun /*, thisp */) {
    var object = STDLIB.toObject(this),
      self = STDLIB.splitString && _toString(this) == "[object String]" ?
        this.split("") :
          object,
      length = self.length >>> 0,
      result = [],
      value,
      thisp = arguments[1];

    // If no callback function or if callback is not a callable function
    if (_toString(fun) != "[object Function]") {
      throw new TypeError(fun + " is not a function");
    }

    for (var i = 0; i < length; i++) {
      if (i in self) {
        value = self[i];
        if (fun.call(thisp, value, i, object)) {
          result.push(value);
        }
      }
    }
    return result;
  };
}
