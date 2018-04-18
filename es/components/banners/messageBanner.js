var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

import { concatClassNames, propValidator } from "../../helpers.js";

var MessageBanner = function MessageBanner(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      bgColor = _ref.bgColor,
      fontColor = _ref.fontColor,
      children = _ref.children,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["addContClasses", "contClasses", "bgColor", "fontColor", "children", "onClick"]);

  return React.createElement(
    "div",
    _extends({
      className: concatClassNames(contClasses, addContClasses, bgColor || undefined, fontColor || undefined, onClick ? "pointer" : undefined),
      onClick: onClick
    }, props),
    children
  );
};

MessageBanner.defaultProps = {
  contClasses: ["measure", "pa3", "pa4-m", "pa4-ns"],
  bgColor: "bg-black-80",
  fontColor: "white"
};
MessageBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: propValidator.classNamesBasic,
  contClasses: propValidator.classNamesBasic,
  bgColor: propValidator.classNameOptional,
  fontColor: propValidator.classNameOptional,
  onClick: PropTypes.func
} : {};

export default MessageBanner;