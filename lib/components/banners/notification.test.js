import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Notification from "./notification.js";

const requiredProps = {};
describe("Notification smoke tests", () =>
         runAllComponentSmokeTests(Notification, requiredProps));

enzyme.configure({ adapter: new Adapter() });
describe("Notification - manual tests", () => {});
