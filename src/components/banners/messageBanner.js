import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator } from "../../helpers.js";

const MessageBanner = ({
  addContClasses,
  contClasses,
  bgColor,
  fontColor,
  children,
  onClick,
  ...props
}) => (
  <div
    className={concatClassNames(
      contClasses,
      addContClasses,
      bgColor || undefined,
      fontColor || undefined,
      onClick ? "pointer" : undefined
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);

MessageBanner.defaultProps = {
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColor: "bg-black-80",
  fontColor: "white"
};
MessageBanner.propTypes = {
  addContClasses: propValidator.classNamesBasic,
  contClasses: propValidator.classNamesBasic,
  bgColor: propValidator.classNameOptional,
  fontColor: propValidator.classNameOptional,
  onClick: PropTypes.func
};

export default MessageBanner;
