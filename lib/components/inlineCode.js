"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Code = function Code(_ref) {
  var children = _ref.children,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["children", "text"]);

  return _react2.default.createElement(
    "span",
    _extends({
      className: (0, _helpers.concatClassNames)("courier", "dark-red", "bg-light-gray", "ph1", "br2")
    }, props),
    children,
    text
  );
};

Code.defaultProps = {};

Code.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes2.default.node
} : {};
exports.default = Code;
module.exports = exports["default"];