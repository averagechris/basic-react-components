"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../../thecss.css");

var _helpers = require("../../helpers.js");

var _xIcon = require("./xIcon.js");

var _xIcon2 = _interopRequireDefault(_xIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIconNew = function CloseIconNew(_ref) {
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
      className: (0, _helpers.concatClassNames)(contClasses, addContClasses, animate ? "spin-once-fast" : undefined, onClick ? "pointer" : undefined),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    _react2.default.createElement("circle", {
      className: (0, _helpers.concatClassNames)(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 285 } : undefined,
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
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
CloseIconNew.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = CloseIconNew;
module.exports = exports["default"];