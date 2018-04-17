import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

import { concatClassNames } from "../../helpers.js";
import XIcon from "./xIcon.js";

const CloseIcon = ({
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
      animate ? "spin-once-fast" : undefined,
      onClick ? "pointer" : undefined
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
    <XIcon color={color} fill={fill} strokeWidth={strokeWidth} />
  </svg>
);

CloseIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
CloseIcon.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default CloseIcon;
