"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBanner = function MessageBanner(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      bgColorClass = _ref.bgColorClass,
      fontColorClass = _ref.fontColorClass,
      message = _ref.message,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    "div",
    {
      className: (0, _helpers.concatClassNames)(contClasses, addContClasses, bgColorClass, fontColorClass, onClick ? "pointer" : undefined)
    },
    message,
    children
  );
};

MessageBanner.defaultProps = {
  addContClasses: [],
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColorClass: "bg-black-80",
  fontColorClass: "white"
};
MessageBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  bgColorClass: _propTypes2.default.string,
  fontColorClass: _propTypes2.default.string,
  message: _propTypes2.default.node,
  onClick: _propTypes2.default.func
} : {};

exports.default = MessageBanner;
module.exports = exports["default"];