import React from "react";
import PropTypes from "prop-types";
import { concatClassNames, propValidator } from "../../helpers.js";

var SIZE_MAP = {
  small: { min: "1", max: "7" },
  medium: { min: "1", max: "11" }
};

export var CloseIcon = function CloseIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      color = _ref.color,
      onClick = _ref.onClick,
      size = _ref.size,
      strokeOpacity = _ref.strokeOpacity,
      strokeWidth = _ref.strokeWidth;
  return React.createElement(
    "span",
    {
      className: concatClassNames(contClasses, addContClasses),
      onClick: onClick
    },
    React.createElement(
      "svg",
      {
        height: String(Number(SIZE_MAP[size].max) + 1),
        width: String(Number(SIZE_MAP[size].max) + 1),
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      React.createElement("line", {
        x1: SIZE_MAP[size].min,
        y1: SIZE_MAP[size].max,
        x2: SIZE_MAP[size].max,
        y2: SIZE_MAP[size].min,
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }),
      React.createElement("line", {
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
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: function size(props, propName, componentName) {
    var p = props[propName];
    if (!Object.keys(SIZE_MAP).includes(p)) return new Error("Validation for prop " + propName + " failed in " + componentName);
  },
  strokeOpacity: propValidator.isDecimal,
  strokeWidth: propValidator.endsWithpx
} : {};

CloseIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["pointer", "w1"],
  color: "black",
  size: "medium",
  strokeWidth: "2px",
  strokeOpacity: "0.7"
};

export default CloseIcon;