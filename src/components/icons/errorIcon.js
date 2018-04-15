import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

const ErrorIcon = ({
  addContClasses,
  contClasses,
  animate,
  color,
  fill,
  strokeWidth,
  strokeOpacity,
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
      strokeOpacity={strokeOpacity}
    />

    <polygon
      className={animate ? "stroke-animate-fast" : undefined}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      fill={fill}
      points="50,20 20,66 80,66"
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
      y="57"
      fontSize="35"
    >
      !
    </text>
  </svg>
);

ErrorIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "#e7040f",
  fill: "none",
  strokeOpacity: "1",
  strokeWidth: 1
};
ErrorIcon.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeOpacity: PropTypes.string,
  strokeWidth: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default ErrorIcon;
