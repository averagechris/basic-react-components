import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Select from "./select.js";

runAllComponentSmokeTests(Select, {options: []});
