import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

var ErrorIcon = function ErrorIcon(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      containerClasses = _ref.containerClasses,
      animate = _ref.animate,
      color = _ref.color,
      fill = _ref.fill,
      strokeWidth = _ref.strokeWidth,
      strokeOpacity = _ref.strokeOpacity,
      onClick = _ref.onClick;
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg",
      className: [].concat(containerClasses, additionalContainerClasses, [animate ? "spin-once-fast" : "", onClick ? "pointer" : ""]).join(" "),
      viewBox: "0 0 100 100",
      onClick: onClick
    },
    React.createElement("circle", {
      className: animate ? "stroke-animate-fast" : "",
      style: animate ? { strokeDasharray: 285 } : {},
      cx: "50",
      cy: "50",
      r: "45",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeOpacity: strokeOpacity
    }),
    React.createElement("polygon", {
      className: animate ? "stroke-animate-fast" : undefined,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeOpacity: strokeOpacity,
      fill: fill,
      points: "50,20 20,66 80,66"
    }),
    React.createElement(
      "text",
      {
        style: {
          cursor: "default",
          userSelect: "none",
          MozUserSelect: "none"
        },
        fillOpacity: strokeOpacity,
        fill: color,
        x: "44",
        y: "57",
        fontSize: "35"
      },
      "!"
    )
  );
};

ErrorIcon.defaultProps = {
  additionalContainerClasses: [],
  containerClasses: ["w-100", "h-100"],
  animate: false,
  color: "#e7040f",
  fill: "none",
  strokeOpacity: "1",
  strokeWidth: 1
};
ErrorIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: PropTypes.arrayOf(PropTypes.string),
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeOpacity: PropTypes.string,
  strokeWidth: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  onClick: PropTypes.func
} : {};

export default ErrorIcon;