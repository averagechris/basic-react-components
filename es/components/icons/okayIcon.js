import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

var OkayIcon = function OkayIcon(_ref) {
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
    React.createElement("circle", {
      className: animate ? "stroke-animate-fast" : undefined,
      style: animate ? { strokeDasharray: 285 } : undefined,
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
    }),
    React.createElement("path", {
      className: animate ? "stroke-animate-fast" : undefined,
      style: animate ? { strokeDasharray: 35 } : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: "none",
      d: "M40 50 l7 8 15 -20"
    })
  );
};

OkayIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: [],
  animate: false,
  color: "#19a974",
  fill: "none",
  strokeWidth: 1
};
OkayIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
} : {};

export default OkayIcon;