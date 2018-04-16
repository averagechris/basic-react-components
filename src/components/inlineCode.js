import React from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../helpers.js";

const Code = ({ children, text, ...props }) => (
  <span
    className={concatClassNames(
      "courier",
      "dark-red",
      "bg-light-gray",
      "ph1",
      "br2"
    )}
    {...props}
  >
    {children}
    {text}
  </span>
);

Code.defaultProps = {};

Code.propTypes = {
  text: PropTypes.node
};
export default Code;
