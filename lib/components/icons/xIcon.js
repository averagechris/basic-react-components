"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XIcon = function XIcon(_ref) {
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
      className: (0, _helpers.concatClassNames)(contClasses, addContClasses, animate ? "spin-once-fast" : "", onClick ? "pointer" : ""),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    _react2.default.createElement("path", {
      className: (0, _helpers.concatClassNames)(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 80 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 30 l20 20 20 -20"
    }),
    _react2.default.createElement("path", {
      className: (0, _helpers.concatClassNames)(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 80 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 70 l20 -20 20 20"
    })
  );
};

XIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
XIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  strokeWidth: _propTypes2.default.number
} : {};

exports.default = XIcon;
module.exports = exports["default"];