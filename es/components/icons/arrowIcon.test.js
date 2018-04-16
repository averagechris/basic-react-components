import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import ArrowIcon from "./arrowIcon.js";

runAllComponentSmokeTests(ArrowIcon, { direction: "up" });
