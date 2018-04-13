import React from "react";
import PropTypes from "prop-types";

import { propValidator, cssTypes } from "../helpers.js";
import "../thecss.css";

const SIZE_MAP = {
  1: "3px",
  2: "7px",
  3: "12px",
  4: "15px",
  5: "17px"
};

const Spinner = ({
  additionalClassNames,
  classNames,
  size,
  ringColor,
  spinnerColor,
  borderType,
  borderWidth,
  ...props
}) => (
  <div
    className={[...additionalClassNames, ...classNames]
      .join(" ")
      .concat(` h${size} w${size}`)}
    style={{
      border: `${borderWidth || SIZE_MAP[size]} ${borderType} ${ringColor}`,
      "border-top": `${borderWidth ||
        SIZE_MAP[size]} ${borderType} ${spinnerColor}`
    }}
    {...props}
  />
);

Spinner.defaultProps = {
  additionalClassNames: [],
  classNames: ["spin-ease-in", "br-100"],
  size: 3,
  ringColor: "#f3f3f3",
  spinnerColor: "#3498db",
  borderType: "solid"
};
Spinner.propTypes = {
  additionalClassNames: PropTypes.arrayOf(PropTypes.string),
  classNames: PropTypes.arrayOf(PropTypes.string),
  ringColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  borderType: PropTypes.oneOf(cssTypes.borderType),
  borderWidth: propValidator.endsWithpx
};
export default Spinner;
