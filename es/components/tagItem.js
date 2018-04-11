var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

var TagItem = function TagItem(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      additionalLabelClasses = _ref.additionalLabelClasses,
      additionalValueClasses = _ref.additionalValueClasses,
      containerClasses = _ref.containerClasses,
      labelClasses = _ref.labelClasses,
      valueClasses = _ref.valueClasses,
      name = _ref.name,
      label = _ref.label,
      separator = _ref.separator,
      value = _ref.value,
      _onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["additionalContainerClasses", "additionalLabelClasses", "additionalValueClasses", "containerClasses", "labelClasses", "valueClasses", "name", "label", "separator", "value", "onClick", "children"]);

  return React.createElement(
    "div",
    _extends({
      className: [].concat(containerClasses, additionalContainerClasses).join(" ")
    }, props),
    label && React.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: [].concat(labelClasses, additionalLabelClasses).join(" ")
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
        className: [].concat(valueClasses, additionalValueClasses).join(" ")
      },
      value
    )
  );
};

export { TagItem };
TagItem.defaultProps = {
  additionalContainerClasses: [],
  additionalValueClasses: [],
  additionalLabelClasses: [],
  containerClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: function onClick() {},
  separator: true
};

TagItem.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalValueClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  valueClasses: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  label: PropTypes.node,
  onClick: PropTypes.func,
  separator: PropTypes.bool,
  value: PropTypes.node
} : {};

export default TagItem;