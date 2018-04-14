"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../../thecss.css");

var _xIcon = require("./xIcon.js");

var _xIcon2 = _interopRequireDefault(_xIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIconNew = function CloseIconNew(_ref) {
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
    _react2.default.createElement("circle", {
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 285 } : {},
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
    }),
    _react2.default.createElement(_xIcon2.default, { color: color, fill: fill, strokeWidth: strokeWidth })
  );
};

CloseIconNew.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
CloseIconNew.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = CloseIconNew;
module.exports = exports["default"];