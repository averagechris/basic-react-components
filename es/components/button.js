var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

var Button = function Button(_ref) {
  var additionalClasses = _ref.additionalClasses,
      classList = _ref.classList,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["additionalClasses", "classList", "text"]);

  return React.createElement(
    "button",
    _extends({ className: [].concat(classList, additionalClasses).join(" ") }, props),
    text
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalClasses: PropTypes.arrayOf(PropTypes.string),
  classList: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
} : {};

Button.defaultProps = {
  additionalClasses: [],
  classList: ["pv2", "ph3", "f5", "br2", "white", "bg-blue", "pointer"]
};
export default Button;