import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

import XIcon from "./xIcon.js";

const CloseIconNew = ({
  addContClasses,
  contClasses,
  animate,
  color,
  fill,
  strokeWidth,
  onClick
}) => (
  <svg
    xmlns="http://www.w3.org/svg"
    className={[
      ...contClasses,
      ...addContClasses,
      animate ? "spin-once-fast" : "",
      onClick ? "pointer" : ""
    ].join(" ")}
    viewBox="0 0 100 100"
    onClick={onClick}
  >
    <circle
      className={animate ? "stroke-animate-fast" : ""}
      style={animate ? { strokeDasharray: 285 } : {}}
      cx="50"
      cy="50"
      r="45"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <XIcon color={color} fill={fill} strokeWidth={strokeWidth} />
  </svg>
);

CloseIconNew.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
CloseIconNew.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default CloseIconNew;
