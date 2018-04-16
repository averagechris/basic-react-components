var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

var Code = function Code(_ref) {
  var children = _ref.children,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["children", "text"]);

  return React.createElement(
    "span",
    _extends({
      className: concatClassNames("courier", "dark-red", "bg-light-gray", "ph1", "br2")
    }, props),
    children,
    text
  );
};

Code.defaultProps = {};

Code.propTypes = process.env.NODE_ENV !== "production" ? {
  text: PropTypes.node
} : {};
export default Code;