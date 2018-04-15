import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";
import { concatClassNames } from "../../helpers.js";

const InfoIcon = ({
  addContClasses,
  contClasses,
  animate,
  color,
  fill,
  strokeOpacity,
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
      style={animate ? { strokeDasharray: 285 } : {}}
      cx="50"
      cy="50"
      r="45"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
    />

    <text
      style={{
        cursor: "default",
        userSelect: "none",
        MozUserSelect: "none"
      }}
      fillOpacity={strokeOpacity}
      fill={color}
      x="44"
      y="65"
      fontSize="45"
    >
      i
    </text>
  </svg>
);

InfoIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1,
  strokeOpacity: "1"
};
InfoIcon.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeOpacity: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default InfoIcon;
