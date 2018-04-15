import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator, cssTypes } from "../../helpers.js";
import "../../thecss.css";

const SIZE_MAP = {
  1: "3px",
  2: "7px",
  3: "12px",
  4: "15px",
  5: "17px"
};
const getSize = size => SIZE_MAP[size];

const Spinner = ({
  addClassNames,
  classNames,
  size,
  ringColor,
  spinnerColor,
  borderType,
  ...props
}) => (
  <div
    className={concatClassNames(
      addClassNames,
      classNames,
      `h${size}`,
      `w${size}`
    )}
    style={{
      border: `${SIZE_MAP[size]} ${borderType} ${ringColor}`,
      borderTop: `${SIZE_MAP[size]} ${borderType} ${spinnerColor}`
    }}
    {...props}
  />
);

Spinner.defaultProps = {
  addClassNames: [],
  classNames: ["spin-ease-in", "br-100"],
  size: 3,
  ringColor: "#f3f3f3",
  spinnerColor: "#3498db",
  borderType: "solid"
};
Spinner.propTypes = {
  addClassNames: PropTypes.arrayOf(PropTypes.string),
  classNames: PropTypes.arrayOf(PropTypes.string),
  ringColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  borderType: PropTypes.oneOf(cssTypes.borderType)
};
export default Spinner;
