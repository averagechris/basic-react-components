var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import PropTypes from "prop-types";

import { propValidator } from "../../helpers.js";

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
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
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

  return React.createElement(
    "div",
    {
      className: [].concat(contClasses, addContClasses).join(" "),
      onClick: onClick
    },
    React.createElement(
      "svg",
      {
        height: height + "px",
        width: width + "px",
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      React.createElement("line", _extends({}, points[0], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      })),
      React.createElement("line", _extends({}, points[1], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }))
    )
  );
};

ArrowIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.oneOf(["white", "black"]),
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["right", "left", "up", "down"]).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: propValidator.endsWithpx,
  strokeOpacity: propValidator.isDecimal,
  onClick: PropTypes.func.isRequired
} : {};

ArrowIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["pointer", "w2", "ma2", "dim"],
  color: "white",
  disabled: false,
  height: 40,
  width: 40,
  strokeOpacity: "0.8",
  strokeWidth: "2px"
};

export default ArrowIcon;