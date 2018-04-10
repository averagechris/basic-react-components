import React from "react";

export default (function (props) {
  return React.createElement(
    "span",
    { className: "courier dark-red bg-light-gray ph1 br2" },
    props.text || props.children
  );
});