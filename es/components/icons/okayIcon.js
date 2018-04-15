import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import "../../thecss.css";

var OkayIcon = function OkayIcon(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      onClick = _ref.onClick;
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: concatClassNames(contClasses, addContClasses, animate ? "spin-once-fast" : "", onClick ? "pointer" : ""),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    React.createElement("circle", {
      className: concatClassNames(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 285 } : undefined,
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
    }),
    React.createElement("path", {
      className: concatClassNames(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 35 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M40 50 l7 8 15 -20"
    })
  );
};

OkayIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "#19a974",
  fill: "none",
  strokeWidth: 1
};
OkayIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
} : {};

export default OkayIcon;