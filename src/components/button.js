import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

const Button = ({ addClasses, classes, children, text, ...props }) => (
  <button className={concatClassNames(classes, addClasses)} {...props}>
    {children}
    {text}
  </button>
);

Button.propTypes = {
  addClasses: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node
};

Button.defaultProps = {
  addClasses: [],
  classes: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
export default Button;
