import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import FormInput from "./formInput.js";

describe("FormInput - smoke tests", () =>
  runAllComponentSmokeTests(FormInput, { name: "jimmy" }));

enzyme.configure({ adapter: new Adapter() });

describe("FormInput - manual tests", () => {
  test("it should call onChange when it's value is set", () => {
    const mock = jest.fn();
    const props = {
      onChange: mock,
      name: "give me ur data",
      value: "okay"
    };
    const component = enzyme.mount(<FormInput {...props} />);

    component.find("input").simulate("change");
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toBeCalledWith({ name: props.name, value: props.value });
  });
  test("it should not call onChange when uncontrolled", () => {
    const mock = jest.fn();
    const props = {
      uncontrolled: true,
      onChange: mock,
      name: "don't give me ur data",
      value: "okey dokey"
    };
    const component = enzyme.shallow(<FormInput {...props} />);
    component.find("input").simulate("change");
    expect(mock).not.toHaveBeenCalled();
  });
  test("it should call setRef with reference to input when uncontrolled", () => {
    const mock = jest.fn();
    const props = {
      uncontrolled: true,
      setRef: mock,
      name: "don't give me ur data"
    };
    const component = enzyme.mount(<FormInput {...props} />);
    const input = component.find("input").getDOMNode();
    expect(mock).toHaveBeenCalledWith({ name: props.name, ref: input });
  });
  test("iconFunc was not called when it was passed as a prop", () => {
    const mock = jest.fn();
    const props = { name: "hello", iconFunc: mock };
    const component = enzyme.shallow(<FormInput {...props} />);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
