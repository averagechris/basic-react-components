import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
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
    className={concatClassNames(
      contClasses,
      addContClasses,
      animate ? "spin-once-fast" : "",
      onClick ? "pointer" : ""
    )}
    viewBox="0 0 100 100"
    onClick={onClick}
  >
    <circle
      className={concatClassNames(animate ? "stroke-animate-fast" : undefined)}
      style={animate ? { strokeDasharray: 285 } : undefined}
      cx="50"
      cy="50"
      r="45"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      className={concatClassNames(animate ? "stroke-animate-fast" : undefined)}
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
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "#19a974",
  fill: "none",
  strokeWidth: 1
};
OkayIcon.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  strokeWidth: PropTypes.number
};

export default OkayIcon;
