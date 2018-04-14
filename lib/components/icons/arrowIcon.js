"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPoints = function getPoints(max, min, direction) {
  var points_map = {
    right: [{
      x1: min,
      y1: min,
      x2: Math.floor(max * 0.5),
      y2: Math.floor(max * 0.5)
    }, { x1: min, y1: max, x2: Math.floor(max * 0.5), y2: Math.floor(max * 0.5) }],
    left: [{
      x1: min,
      y1: Math.floor(max * 0.5),
      x2: Math.floor(max * 0.5),
      y2: max
    }, { x1: min, y1: Math.floor(max * 0.5), x2: Math.floor(max * 0.5), y2: min }],
    up: [{
      x1: Math.floor(max * 0.5),
      y1: min,
      x2: min,
      y2: Math.floor(max * 0.63)
    }, {
      x1: Math.floor(max * 0.5),
      y1: min,
      x2: max,
      y2: Math.floor(max * 0.63)
    }],
    down: [{
      x1: Math.floor(max * 0.5),
      y1: Math.floor(max * 0.63),
      x2: min,
      y2: min
    }, {
      x1: Math.floor(max * 0.5),
      y1: Math.floor(max * 0.63),
      x2: max,
      y2: min
    }]
  };

  return points_map[direction];
};

var ArrowIcon = function ArrowIcon(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      containerClasses = _ref.containerClasses,
      color = _ref.color,
      direction = _ref.direction,
      disabled = _ref.disabled,
      height = _ref.height,
      width = _ref.width,
      strokeWidth = _ref.strokeWidth,
      strokeOpacity = _ref.strokeOpacity,
      onClick = _ref.onClick;

  var maxSize = height > width ? height : width;
  var points = getPoints(maxSize, 1, direction);

  return _react2.default.createElement(
    "div",
    {
      className: [].concat(containerClasses, additionalContainerClasses).join(" "),
      onClick: onClick
    },
    _react2.default.createElement(
      "svg",
      {
        height: height + "px",
        width: width + "px",
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      _react2.default.createElement("line", _extends({}, points[0], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      })),
      _react2.default.createElement("line", _extends({}, points[1], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }))
    )
  );
};

ArrowIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  color: _propTypes2.default.oneOf(["white", "black"]),
  disabled: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(["right", "left", "up", "down"]).isRequired,
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  strokeWidth: _helpers.propValidator.endsWithpx,
  strokeOpacity: _helpers.propValidator.isDecimal,
  onClick: _propTypes2.default.func.isRequired
} : {};

ArrowIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["pointer", "w2", "ma2", "dim"],
  color: "white",
  disabled: false,
  height: 40,
  width: 40,
  strokeOpacity: "0.8",
  strokeWidth: "2px"
};

exports.default = ArrowIcon;
module.exports = exports["default"];