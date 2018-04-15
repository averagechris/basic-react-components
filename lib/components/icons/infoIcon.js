"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoIcon = function InfoIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeOpacity = _ref.strokeOpacity,
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
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 285 } : {},
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
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
        y: "65",
        fontSize: "45"
      },
      "i"
    )
  );
};

InfoIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1,
  strokeOpacity: "1"
};
InfoIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  animate: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  strokeOpacity: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = InfoIcon;
module.exports = exports["default"];