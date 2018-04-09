import React from "react";

export default props => (
  <span className="courier dark-red bg-light-gray ph1 br2">
    {props.text || props.children}
  </span>
);
