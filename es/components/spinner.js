var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

import { propValidator, cssTypes } from "../helpers.js";
import "../thecss.css";

var SIZE_MAP = {
  1: "3px",
  2: "7px",
  3: "12px",
  4: "15px",
  5: "17px"
};

var Spinner = function Spinner(_ref) {
  var additionalClassNames = _ref.additionalClassNames,
      classNames = _ref.classNames,
      size = _ref.size,
      ringColor = _ref.ringColor,
      spinnerColor = _ref.spinnerColor,
      borderType = _ref.borderType,
      borderWidth = _ref.borderWidth,
      props = _objectWithoutProperties(_ref, ["additionalClassNames", "classNames", "size", "ringColor", "spinnerColor", "borderType", "borderWidth"]);

  return React.createElement("div", _extends({
    className: [].concat(additionalClassNames, classNames).join(" ").concat(" h" + size + " w" + size),
    style: {
      border: (borderWidth || SIZE_MAP[size]) + " " + borderType + " " + ringColor,
      "border-top": (borderWidth || SIZE_MAP[size]) + " " + borderType + " " + spinnerColor
    }
  }, props));
};

Spinner.defaultProps = {
  additionalClassNames: [],
  classNames: ["spin-ease-in", "br-100"],
  size: 3,
  ringColor: "#f3f3f3",
  spinnerColor: "#3498db",
  borderType: "solid"
};
Spinner.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalClassNames: PropTypes.arrayOf(PropTypes.string),
  classNames: PropTypes.arrayOf(PropTypes.string),
  ringColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  borderType: PropTypes.oneOf(cssTypes.borderType),
  borderWidth: propValidator.endsWithpx
} : {};
export default Spinner;