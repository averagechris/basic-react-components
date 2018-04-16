import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

export const TagItem = ({
  addContClasses,
  addLabelClasses,
  addValueClasses,
  contClasses,
  labelClasses,
  valueClasses,
  name,
  label,
  separator,
  value,
  onClick,
  children,
  ...props
}) => (
  <div className={concatClassNames(contClasses, addContClasses)} {...props}>
    {label && (
      <span
        onClick={() => (name ? onClick(name) : onClick())}
        className={concatClassNames(labelClasses, addLabelClasses)}
      >
        {label}
        {separator && " |"}
      </span>
    )}
    {children}
    <span
      onClick={() => (name ? onClick(name) : onClick())}
      className={concatClassNames(valueClasses, addValueClasses)}
    >
      {value}
    </span>
  </div>
);

TagItem.defaultProps = {
  addContClasses: [],
  addValueClasses: [],
  addLabelClasses: [],
  contClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: () => {},
  separator: true
};

TagItem.propTypes = {
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
};

export default TagItem;
