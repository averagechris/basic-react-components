"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XIcon = function XIcon(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      containerClasses = _ref.containerClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: [].concat(containerClasses, additionalContainerClasses, [animate ? "spin-once-fast" : "", onClick ? "pointer" : ""]).join(" "),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    _react2.default.createElement("path", {
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 80 } : {},
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 30 l20 20 20 -20"
    }),
    _react2.default.createElement("path", {
      className: animate && "stroke-animate-fast",
      style: animate ? { strokeDasharray: 80 } : {},
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 70 l20 -20 20 20"
    })
  );
};

XIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
XIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClick: _propTypes2.default.func
} : {};

exports.default = XIcon;
module.exports = exports["default"];