import React from "react";
import PropTypes from "prop-types";

const Button = ({ additionalClasses, classList, text, ...props }) => (
  <button className={[...classList, ...additionalClasses].join(" ")} {...props}>
    {text}
  </button>
);

Button.propTypes = {
  additionalClasses: PropTypes.arrayOf(PropTypes.string),
  classList: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
};

Button.defaultProps = {
  additionalClasses: [],
  classList: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
export default Button;
