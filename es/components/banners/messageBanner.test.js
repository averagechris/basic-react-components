import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import MessageBanner from "./messageBanner.js";

const requiredProps = {};
describe("MessageBanner smoke tests", () =>
  runAllComponentSmokeTests(MessageBanner, requiredProps));

enzyme.configure({ adapter: new Adapter() });
describe("MessageBanner - manual tests", () => {
  test("onClick was called before a click event", () => {
    const mock = jest.fn();
    const props = {
      onClick: mock
    };
    const component = enzyme.shallow(<MessageBanner {...props} />);
    expect(mock).not.toHaveBeenCalled();
  });
  test("onClick was not called on click event", () => {
    const mock = jest.fn();
    const props = {
      onClick: mock
    };
    const component = enzyme.shallow(<MessageBanner {...props} />);
    component.find("div").simulate("click");
    expect(mock).toHaveBeenCalled();
  });
});
