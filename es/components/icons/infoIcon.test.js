import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import InfoIcon from "./infoIcon.js";

const requiredProps = {};
runAllComponentSmokeTests(InfoIcon, requiredProps);
