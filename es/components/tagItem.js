var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

var TagItem = function TagItem(_ref) {
  var addContClasses = _ref.addContClasses,
      addLabelClasses = _ref.addLabelClasses,
      addValueClasses = _ref.addValueClasses,
      contClasses = _ref.contClasses,
      labelClasses = _ref.labelClasses,
      valueClasses = _ref.valueClasses,
      name = _ref.name,
      label = _ref.label,
      separator = _ref.separator,
      value = _ref.value,
      _onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["addContClasses", "addLabelClasses", "addValueClasses", "contClasses", "labelClasses", "valueClasses", "name", "label", "separator", "value", "onClick", "children"]);

  return React.createElement(
    "div",
    _extends({ className: concatClassNames(contClasses, addContClasses) }, props),
    label && React.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: concatClassNames(labelClasses, addLabelClasses)
      },
      label,
      separator && " |"
    ),
    children,
    React.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: concatClassNames(valueClasses, addValueClasses)
      },
      value
    )
  );
};

export { TagItem };
TagItem.defaultProps = {
  addContClasses: [],
  addValueClasses: [],
  addLabelClasses: [],
  contClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: function onClick() {},
  separator: true
};

TagItem.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  addValueClasses: PropTypes.arrayOf(PropTypes.string),
  addLabelClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  valueClasses: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  label: PropTypes.node,
  onClick: PropTypes.func,
  separator: PropTypes.bool,
  value: PropTypes.node
} : {};

export default TagItem;