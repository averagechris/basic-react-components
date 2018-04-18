import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator } from "../../helpers.js";
import MessageBanner from "./messageBanner.js";
import InfoIcon from "../icons/infoIcon.js";

const renderDefaultIcon = () => (
  <div className="w-70">
    <InfoIcon color="white" strokeWidth={5} />
  </div>
);

const Notification = ({
  addContClasses,
  contClasses,
  borderColor,
  highlightFontColor,
  highlightColor,
  backgroundColor,
  fontColor,
  shadow,
  onClick,
  icon,
  children
}) => {
  return (
    <div className={concatClassNames(contClasses, addContClasses, shadow)}>
      <MessageBanner
        contClasses={[
          "w-100 h-100",
          "flex justify-start items-center",
          "ba br1",
          borderColor
        ]}
        bgColor={false}
        fontColor={false}
        onClick={onClick}
      >
        <div
          className={concatClassNames(
            "h-100",
            "w2",
            "flex items-center justify-center",
            highlightColor,
            highlightFontColor || undefined,
            onClick ? "pointer" : undefined
          )}
        >
          {icon}
        </div>
        <div className={concatClassNames("pa3", backgroundColor, fontColor)}>
          {children}
        </div>
      </MessageBanner>
    </div>
  );
};

Notification.defaultProps = {
  contClasses: ["dib"],
  borderColor: "b--blue",
  highlightFontColor: "white",
  highlightColor: "bg-blue",
  highlightFontColor: "white",
  icon: renderDefaultIcon(),
  shadow: "shadow-1"
};
Notification.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
  highlightFontColor: propValidator.classNameOptional,
  backgroundColor: propValidator.classNameOptional,
  fontColor: propValidator.classNameOptional,
  shadow: propValidator.classNameOptional
};

export default Notification;
