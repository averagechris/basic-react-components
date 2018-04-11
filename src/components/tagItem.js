import React from "react";
import PropTypes from "prop-types";

export const TagItem = ({
  additionalContainerClasses,
  additionalLabelClasses,
  additionalValueClasses,
  containerClasses,
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
  <div
    className={[...containerClasses, ...additionalContainerClasses].join(" ")}
    {...props}
  >
    {label && (
      <span
        onClick={() => (name ? onClick(name) : onClick())}
        className={[...labelClasses, ...additionalLabelClasses].join(" ")}
      >
        {label}
        {separator && " |"}
      </span>
    )}
    {children}
    <span
      onClick={() => (name ? onClick(name) : onClick())}
      className={[...valueClasses, ...additionalValueClasses].join(" ")}
    >
      {value}
    </span>
  </div>
);

TagItem.defaultProps = {
  additionalContainerClasses: [],
  additionalValueClasses: [],
  additionalLabelClasses: [],
  containerClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: () => {},
  separator: true
};

TagItem.propTypes = {
  additionalValueClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  valueClasses: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  label: PropTypes.node,
  onClick: PropTypes.func,
  separator: PropTypes.bool,
  value: PropTypes.node
};

export default TagItem;
