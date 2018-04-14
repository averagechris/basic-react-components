import React from "react";
import PropTypes from "prop-types";
import { propValidator } from "../../helpers.js";

const SIZE_MAP = {
  small: { min: "1", max: "7" },
  medium: { min: "1", max: "11" }
};

export const CloseIcon = ({
  additionalContainerClasses,
  containerClasses,
  color,
  onClick,
  size,
  strokeOpacity,
  strokeWidth
}) => (
  <span
    className={[...containerClasses, ...additionalContainerClasses].join(" ")}
    onClick={onClick}
  >
    <svg
      height={String(Number(SIZE_MAP[size].max) + 1)}
      width={String(Number(SIZE_MAP[size].max) + 1)}
      version="1.1"
      xmlns="http://www.w3.org/svg"
    >
      <line
        x1={SIZE_MAP[size].min}
        y1={SIZE_MAP[size].max}
        x2={SIZE_MAP[size].max}
        y2={SIZE_MAP[size].min}
        stroke={color}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <line
        x1={SIZE_MAP[size].min}
        y1={SIZE_MAP[size].min}
        x2={SIZE_MAP[size].max}
        y2={SIZE_MAP[size].max}
        stroke={color}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  </span>
);

CloseIcon.propTypes = {
  additionalContainerClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: (props, propName, componentName) => {
    let p = props[propName];
    if (!Object.keys(SIZE_MAP).includes(p))
      return new Error(
        `Validation for prop ${propName} failed in ${componentName}`
      );
  },
  strokeOpacity: propValidator.isDecimal,
  strokeWidth: propValidator.endsWithpx
};

CloseIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["pointer", "w1"],
  color: "black",
  size: "medium",
  strokeWidth: "2px",
  strokeOpacity: "0.7"
};

export default CloseIcon;
