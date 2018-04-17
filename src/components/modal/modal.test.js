import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Modal from "./modal.js";

const requiredProps = { handleClose: () => {} };

describe("Modal smoke tests", () =>
  runAllComponentSmokeTests(Modal, requiredProps));

enzyme.configure({ adapter: new Adapter() });

describe("Modal - manual tests", () => {
  test("it should call handleClose on escape", () => {
    const mock = jest.fn();
    const component = enzyme.mount(<Modal handleClose={mock} />);
    component
      .find("div")
      .first()
      .simulate("keydown", { key: "Escape" });
    expect(mock).toHaveBeenCalled();
  });
  test("it should call handleClose when closeIcon is clicked", () => {
    const mock = jest.fn();
    const component = enzyme.mount(<Modal handleClose={mock} />);
    component.find("CloseIcon").simulate("click");
    expect(mock).toHaveBeenCalled();
  });
});
