import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";

var MessageBanner = function MessageBanner(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      bgColorClass = _ref.bgColorClass,
      fontColorClass = _ref.fontColorClass,
      message = _ref.message,
      children = _ref.children,
      onClick = _ref.onClick;
  return React.createElement(
    "div",
    {
      className: concatClassNames(contClasses, addContClasses, bgColorClass, fontColorClass, onClick ? "pointer" : undefined)
    },
    message,
    children
  );
};

MessageBanner.defaultProps = {
  addContClasses: [],
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColorClass: "bg-black-80",
  fontColorClass: "white"
};
MessageBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  bgColorClass: PropTypes.string,
  fontColorClass: PropTypes.string,
  message: PropTypes.node,
  onClick: PropTypes.func
} : {};

export default MessageBanner;