import PropTypes from "prop-types";

import { runAllComponentSmokeTests } from "./componentTestHelpers.js";
import TagItem from "./tagItem.js";

const requiredProps = {};
const skipTests = [
    // im not sure if this test can be made to handle components with
    // multiple onclick children
   "clickHandlersGetClicked"
]
runAllComponentSmokeTests(TagItem, {}, skipTests);
