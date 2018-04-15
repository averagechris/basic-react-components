"use strict";

exports.__esModule = true;
exports.CloseIcon = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE_MAP = {
  small: { min: "1", max: "7" },
  medium: { min: "1", max: "11" }
};

var CloseIcon = exports.CloseIcon = function CloseIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      color = _ref.color,
      onClick = _ref.onClick,
      size = _ref.size,
      strokeOpacity = _ref.strokeOpacity,
      strokeWidth = _ref.strokeWidth;
  return _react2.default.createElement(
    "span",
    {
      className: [].concat(contClasses, addContClasses).join(" "),
      onClick: onClick
    },
    _react2.default.createElement(
      "svg",
      {
        height: String(Number(SIZE_MAP[size].max) + 1),
        width: String(Number(SIZE_MAP[size].max) + 1),
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      _react2.default.createElement("line", {
        x1: SIZE_MAP[size].min,
        y1: SIZE_MAP[size].max,
        x2: SIZE_MAP[size].max,
        y2: SIZE_MAP[size].min,
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }),
      _react2.default.createElement("line", {
        x1: SIZE_MAP[size].min,
        y1: SIZE_MAP[size].min,
        x2: SIZE_MAP[size].max,
        y2: SIZE_MAP[size].max,
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      })
    )
  );
};

CloseIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onClick: _propTypes2.default.func.isRequired,
  color: _propTypes2.default.string,
  size: function size(props, propName, componentName) {
    var p = props[propName];
    if (!Object.keys(SIZE_MAP).includes(p)) return new Error("Validation for prop " + propName + " failed in " + componentName);
  },
  strokeOpacity: _helpers.propValidator.isDecimal,
  strokeWidth: _helpers.propValidator.endsWithpx
} : {};

CloseIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["pointer", "w1"],
  color: "black",
  size: "medium",
  strokeWidth: "2px",
  strokeOpacity: "0.7"
};

exports.default = CloseIcon;