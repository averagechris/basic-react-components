"use strict";

exports.__esModule = true;
exports.concatClassNames = exports.cssTypes = exports.propValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propValidator = exports.propValidator = {
  classNameOptional: function classNameOptional(props, propName, componentName) {
    var p = props[propName];

    if (!(["undefined", "string"].includes(typeof p === "undefined" ? "undefined" : _typeof(p)) || p === false)) return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Expected type \"string\" or value false, received " + p);
  },
  classNamesBasic: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),

  endsWithpx: function endsWithpx(props, propName, componentName) {
    var p = props[propName];
    if (!(typeof p === "string" && p.endsWith("px"))) {
      var msg = "Invalid prop " + propName + " supplied to " + componentName + ". A string that ends with \"px\" is required. Received: \"" + p + "\".";
      return new Error(msg);
    }
  },
  isDecimal: function isDecimal(props, propName, componentName) {
    var p = props[propName];
    var num = Number(p);
    var msg = "Invalid prop " + propName + " supplied to " + componentName + ". A decimal string is required. Received: \"" + p + "\".";
    if (num < 0 || num > 1) {
      return new Error(msg);
    }
  }
};

var cssTypes = exports.cssTypes = {
  borderType: ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"]
};

var concatClassNames = exports.concatClassNames = function concatClassNames() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var split = args.map(function (c) {
    return typeof c === "string" ? c.split(" ") : c;
  });
  var filtered = [].concat.apply([], split).filter(function (c) {
    var isClassName = ["string", "undefined"].includes(typeof c === "undefined" ? "undefined" : _typeof(c)) || c === false;
    if (!isClassName) {
      throw new Error("classNames must be a string or undefined, recieved " + c);
    }
    return typeof c === "string";
  });
  var deduped = Array.from(new Set(filtered));
  return deduped.join(" ");
};