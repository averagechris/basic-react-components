"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var additionalClasses = _ref.additionalClasses,
      classList = _ref.classList,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["additionalClasses", "classList", "text"]);

  return _react2.default.createElement(
    "button",
    _extends({ className: [].concat(classList, additionalClasses).join(" ") }, props),
    text
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  classList: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onClick: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.node.isRequired
} : {};

Button.defaultProps = {
  additionalClasses: [],
  classList: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
exports.default = Button;
module.exports = exports["default"];