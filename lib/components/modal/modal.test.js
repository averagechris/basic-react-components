import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Modal from "./modal.js";

runAllComponentSmokeTests(Modal, {handleClose: () => {}});
