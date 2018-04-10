"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POINTS_MAP = {
  right: [{ x1: "1", y1: "1", x2: "25", y2: "20" }, { x1: "1", y1: "40", x2: "25", y2: "20" }],
  left: [{ x1: "1", y1: "20", x2: "25", y2: "40" }, { x1: "1", y1: "20", x2: "25", y2: "1" }],
  up: [{ x1: "20", y1: "1", x2: "1", y2: "25" }, { x1: "20", y1: "1", x2: "40", y2: "25" }],
  down: [{ x1: "20", y1: "25", x2: "1", y2: "1" }, { x1: "20", y1: "25", x2: "40", y2: "1" }]
};

var ArrowIcon = function ArrowIcon(_ref) {
  var color = _ref.color,
      direction = _ref.direction,
      disabled = _ref.disabled,
      height = _ref.height,
      width = _ref.width,
      strokeWidth = _ref.strokeWidth,
      strokeOpacity = _ref.strokeOpacity,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    "div",
    { className: "pointer w2 ma2 dim", onClick: onClick },
    _react2.default.createElement(
      "svg",
      {
        height: height,
        width: width,
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      _react2.default.createElement("line", _extends({}, POINTS_MAP[direction][0], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      })),
      _react2.default.createElement("line", _extends({}, POINTS_MAP[direction][1], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }))
    )
  );
};

ArrowIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.oneOf(["white", "black"]),
  disabled: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(["right", "left", "up", "down"]).isRequired,
  height: _helpers.propValidator.endsWithpx,
  width: _helpers.propValidator.endsWithpx,
  strokeWidth: _helpers.propValidator.endsWithpx,
  strokeOpacity: _helpers.propValidator.isDecimal,
  onClick: _propTypes2.default.func.isRequired
} : {};

ArrowIcon.defaultProps = {
  color: "white",
  disabled: false,
  height: "40px",
  width: "40px",
  strokeOpacity: "0.8",
  strokeWidth: "2px"
};

exports.default = ArrowIcon;
module.exports = exports["default"];