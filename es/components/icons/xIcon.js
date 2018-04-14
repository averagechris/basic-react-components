import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

var XIcon = function XIcon(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      containerClasses = _ref.containerClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      onClick = _ref.onClick;
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: [].concat(containerClasses, additionalContainerClasses, [animate ? "spin-once-fast" : "", onClick ? "pointer" : ""]).join(" "),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    React.createElement("path", {
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 80 } : {},
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 30 l20 20 20 -20"
    }),
    React.createElement("path", {
      className: animate && "stroke-animate-fast",
      style: animate ? { strokeDasharray: 80 } : {},
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M30 70 l20 -20 20 20"
    })
  );
};

XIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
XIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
} : {};

export default XIcon;