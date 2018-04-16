import { runAllComponentSmokeTests } from "./componentTestHelpers.js";
import Button from "./button.js";

runAllComponentSmokeTests(Button, { onClick: () => {} });
