"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OkayIcon = function OkayIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: [].concat(contClasses, addContClasses, [animate ? "spin-once-fast" : "", onClick ? "pointer" : ""]).join(" "),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    _react2.default.createElement("circle", {
      className: animate ? "stroke-animate-fast" : undefined,
      style: animate ? { strokeDasharray: 285 } : undefined,
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
    }),
    _react2.default.createElement("path", {
      className: animate ? "stroke-animate-fast" : undefined,
      style: animate ? { strokeDasharray: 35 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M40 50 l7 8 15 -20"
    })
  );
};

OkayIcon.defaultProps = {
  addContClasses: [],
  contClasses: [],
  animate: false,
  color: "#19a974",
  fill: "none",
  strokeWidth: 1
};
OkayIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClick: _propTypes2.default.func
} : {};

exports.default = OkayIcon;
module.exports = exports["default"];