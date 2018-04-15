import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

const OkayIcon = ({
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
      className={animate ? "stroke-animate-fast" : undefined}
      style={animate ? { strokeDasharray: 285 } : undefined}
      cx="50"
      cy="50"
      r="45"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      className={animate ? "stroke-animate-fast" : undefined}
      style={animate ? { strokeDasharray: 35 } : undefined}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      d="M40 50 l7 8 15 -20"
    />
  </svg>
);

OkayIcon.defaultProps = {
  addContClasses: [],
  contClasses: [],
  animate: false,
  color: "#19a974",
  fill: "none",
  strokeWidth: 1
};
OkayIcon.propTypes = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
};

export default OkayIcon;
