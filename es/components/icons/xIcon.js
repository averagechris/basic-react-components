import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import "../../thecss.css";

var XIcon = function XIcon(_ref) {
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
    React.createElement("path", {
      className: concatClassNames(animate ? "stroke-animate-fast" : undefined),
      style: animate ? { strokeDasharray: 80 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 30 l20 20 20 -20"
    }),
    React.createElement("path", {
      className: concatClassNames(animate ? "stroke-animate-fast" : undefined),
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
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
} : {};

export default XIcon;