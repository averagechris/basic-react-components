import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

import XIcon from "./xIcon.js";

var CloseIconNew = function CloseIconNew(_ref) {
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
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 285 } : {},
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth
    }),
    React.createElement(XIcon, { color: color, fill: fill, strokeWidth: strokeWidth })
  );
};

CloseIconNew.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
CloseIconNew.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func.isRequired
} : {};

export default CloseIconNew;