var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

var Button = function Button(_ref) {
  var addClasses = _ref.addClasses,
      classes = _ref.classes,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["addClasses", "classes", "text"]);

  return React.createElement(
    "button",
    _extends({ className: concatClassNames(classes, addClasses) }, props),
    text
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  addClasses: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
} : {};

Button.defaultProps = {
  addClasses: [],
  classes: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
export default Button;