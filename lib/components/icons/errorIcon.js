"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorIcon = function ErrorIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      strokeOpacity = _ref.strokeOpacity,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: (0, _helpers.concatClassNames)(contClasses, addContClasses, animate ? "spin-once-fast" : "", onClick ? "pointer" : ""),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    _react2.default.createElement("circle", {
      className: (0, _helpers.concatClassNames)(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 285 } : {},
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeOpacity: strokeOpacity
    }),
    _react2.default.createElement("polygon", {
      className: (0, _helpers.concatClassNames)(animate ? "stroke-animate-fast" : undefined),
      stroke: color,
      strokeWidth: strokeWidth,
      strokeOpacity: strokeOpacity,
      fill: fill,
      points: "50,20 20,66 80,66"
    }),
    _react2.default.createElement(
      "text",
      {
        style: {
          cursor: "default",
          userSelect: "none",
          MozUserSelect: "none"
        },
        fillOpacity: strokeOpacity,
        fill: color,
        x: "44",
        y: "57",
        fontSize: "35"
      },
      "!"
    )
  );
};

ErrorIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "#e7040f",
  fill: "none",
  strokeOpacity: "1",
  strokeWidth: 1
};
ErrorIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  strokeOpacity: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClick: _propTypes2.default.func
} : {};

exports.default = ErrorIcon;
module.exports = exports["default"];