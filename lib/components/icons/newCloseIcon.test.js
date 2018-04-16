import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import CloseIconNew from "./newCloseIcon.js";

runAllComponentSmokeTests(CloseIconNew, { onClick: () => {} });
