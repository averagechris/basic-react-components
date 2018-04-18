"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MessageBanner = function MessageBanner(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      bgColor = _ref.bgColor,
      fontColor = _ref.fontColor,
      children = _ref.children,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["addContClasses", "contClasses", "bgColor", "fontColor", "children", "onClick"]);

  return _react2.default.createElement(
    "div",
    _extends({
      className: (0, _helpers.concatClassNames)(contClasses, addContClasses, bgColor || undefined, fontColor || undefined, onClick ? "pointer" : undefined),
      onClick: onClick
    }, props),
    children
  );
};

MessageBanner.defaultProps = {
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColor: "bg-black-80",
  fontColor: "white"
};
MessageBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _helpers.propValidator.classNamesBasic,
  contClasses: _helpers.propValidator.classNamesBasic,
  bgColor: _helpers.propValidator.classNameOptional,
  fontColor: _helpers.propValidator.classNameOptional,
  onClick: _propTypes2.default.func
} : {};

exports.default = MessageBanner;
module.exports = exports["default"];