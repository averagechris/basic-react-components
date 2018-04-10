import React from "react";

export default (function (props) {
  return React.createElement(
    "div",
    { className: "pointer w1", onClick: props.onClick },
    React.createElement(
      "svg",
      { height: "12px", width: "12px", version: "1.1", xmlns: "http://www.w3.org/svg" },
      React.createElement("line", {
        x1: "1",
        y1: "11",
        x2: "11",
        y2: "1",
        stroke: props.color,
        strokeOpacity: ".70",
        strokeWidth: "2px"
      }),
      React.createElement("line", {
        x1: "1",
        y1: "1",
        x2: "11",
        y2: "11",
        stroke: props.color,
        strokeOpacity: ".70",
        strokeWidth: "2px"
      })
    )
  );
});