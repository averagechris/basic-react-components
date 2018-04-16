import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";

const MessageBanner = ({
  addContClasses,
  contClasses,
  bgColorClass,
  fontColorClass,
  message,
  children,
  onClick
}) => (
  <div
    className={concatClassNames(
      contClasses,
      addContClasses,
      bgColorClass,
      fontColorClass,
      onClick ? "pointer" : undefined
    )}
  >
    {message}
    {children}
  </div>
);

MessageBanner.defaultProps = {
  addContClasses: [],
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColorClass: "bg-black-80",
  fontColorClass: "white"
};
MessageBanner.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  bgColorClass: PropTypes.string,
  fontColorClass: PropTypes.string,
  message: PropTypes.node,
  onClick: PropTypes.func
};

export default MessageBanner;
