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

var Button = function Button(_ref) {
  var addClasses = _ref.addClasses,
      classes = _ref.classes,
      children = _ref.children,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["addClasses", "classes", "children", "text"]);

  return _react2.default.createElement(
    "button",
    _extends({ className: (0, _helpers.concatClassNames)(classes, addClasses) }, props),
    children,
    text
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  addClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  classes: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onClick: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.node
} : {};

Button.defaultProps = {
  addClasses: [],
  classes: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
exports.default = Button;
module.exports = exports["default"];