import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import CloseIcon from "./closeIcon.js";

runAllComponentSmokeTests(CloseIcon, { onClick: () => {} });
