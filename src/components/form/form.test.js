import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Form from "./form.js";

runAllComponentSmokeTests(Form, {onSubmit: () => {}});
