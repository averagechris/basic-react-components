var _Notification$default;

import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator } from "../../helpers.js";
import MessageBanner from "./messageBanner.js";
import InfoIcon from "../icons/infoIcon.js";

var renderDefaultIcon = function renderDefaultIcon() {
  return React.createElement(
    "div",
    { className: "w-70" },
    React.createElement(InfoIcon, { color: "white", strokeWidth: 5 })
  );
};

var Notification = function Notification(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      borderColor = _ref.borderColor,
      highlightFontColor = _ref.highlightFontColor,
      highlightColor = _ref.highlightColor,
      backgroundColor = _ref.backgroundColor,
      fontColor = _ref.fontColor,
      shadow = _ref.shadow,
      onClick = _ref.onClick,
      icon = _ref.icon,
      children = _ref.children;

  return React.createElement(
    "div",
    { className: concatClassNames(contClasses, addContClasses, shadow) },
    React.createElement(
      MessageBanner,
      {
        contClasses: ["w-100 h-100", "flex justify-start items-center", "ba br1", borderColor],
        bgColor: false,
        fontColor: false,
        onClick: onClick
      },
      React.createElement(
        "div",
        {
          className: concatClassNames("h-100", "w2", "flex items-center justify-center", highlightColor, highlightFontColor || undefined, onClick ? "pointer" : undefined)
        },
        icon
      ),
      React.createElement(
        "div",
        { className: concatClassNames("pa3", backgroundColor, fontColor) },
        children
      )
    )
  );
};

Notification.defaultProps = (_Notification$default = {
  contClasses: ["dib"],
  borderColor: "b--blue",
  highlightFontColor: "white",
  highlightColor: "bg-blue"
}, _Notification$default["highlightFontColor"] = "white", _Notification$default.icon = renderDefaultIcon(), _Notification$default.shadow = "shadow-1", _Notification$default);
Notification.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
  highlightFontColor: propValidator.classNameOptional,
  backgroundColor: propValidator.classNameOptional,
  fontColor: propValidator.classNameOptional,
  shadow: propValidator.classNameOptional
} : {};

export default Notification;