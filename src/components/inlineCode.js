import React from "react";

import { concatClassNames } from "../helpers.js";

export default ({ children, text, ...props }) => (
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
