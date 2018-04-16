import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import FormInput from "./formInput.js";

runAllComponentSmokeTests(FormInput, {name: "jimmy"});
