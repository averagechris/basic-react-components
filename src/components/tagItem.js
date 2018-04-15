import React from "react";
import PropTypes from "prop-types";

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
  <div className={[...contClasses, ...addContClasses].join(" ")} {...props}>
    {label && (
      <span
        onClick={() => (name ? onClick(name) : onClick())}
        className={[...labelClasses, ...addLabelClasses].join(" ")}
      >
        {label}
        {separator && " |"}
      </span>
    )}
    {children}
    <span
      onClick={() => (name ? onClick(name) : onClick())}
      className={[...valueClasses, ...addValueClasses].join(" ")}
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
  addValueClasses: PropTypes.arrayOf(PropTypes.string),
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
