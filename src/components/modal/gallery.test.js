import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Gallery from "./gallery.js";

runAllComponentSmokeTests(Gallery, {
  handleClose: () => {},
  images: ["hello.jpg"]
});
