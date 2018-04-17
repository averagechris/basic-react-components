import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator } from "../../helpers.js";
import MessageBanner from "./messageBanner.js";
import InfoIcon from "../icons/infoIcon.js";

const renderDefaultIcon = () => (
  <div className="w1">
    <InfoIcon color="white" />
  </div>
);

const Notification = ({
  borderColor,
  highlightFontColor,
  highlightColor,
  messageBackgroundColor,
  messageFontColor,
  onClick,
  icon,
  children
}) => {
  return (
    <div className="dib">
      <MessageBanner
        contClasses={[
          "w-100",
          "h3",
          "flex",
          "justify-start",
          "items-center",
          "ba",
          "br1",
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
            "tc center",
            highlightColor,
            highlightFontColor || undefined
          )}
        >
          {icon}
        </div>
        <div
          className={concatClassNames(
            "ph3",
            messageBackgroundColor,
            messageFontColor
          )}
        >
          {children}
        </div>
      </MessageBanner>
    </div>
  );
};

Notification.defaultProps = {
  borderColor: "b--blue",
  highlightFontColor: "white",
  highlightColor: "bg-blue",
  highlightFontColor: "white",
  icon: renderDefaultIcon()
};
Notification.propTypes = {
  icon: PropTypes.node,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
  highlightFontColor: propValidator.classNameOptional,
  messageBackgroundColor: propValidator.classNameOptional,
  messageFontColor: propValidator.classNameOptional
};

export default Notification;
