import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { runAllComponentSmokeTests } from "../componentTestHelpers.js";
import Form from "./form.js";
import FormInput from "./formInput.js";

const requiredProps = {
  onChange: () => {},
  onSubmit: () => {}
};
runAllComponentSmokeTests(Form, requiredProps);

enzyme.configure({ adapter: new Adapter() });

describe("From - manual tests", () => {
  test("it should call onSubmit with props.formData", () => {
    const mock = jest.fn();
    const props = {
      onSubmit: mock,
      onChange: jest.fn(),
      formData: { name: "chris", hobbies: ["drinking", "high fiving"] }
    };
    const component = enzyme.mount(<Form {...props} />);
    component.simulate("submit");
    expect(mock).toHaveBeenCalledWith(props.formData);
  });

  // uncontrolled inputs don't seem like that can be mocked properly
  test.skip("it should call onSubmit with extra data from uncontrolled components", () => {
    const mock = jest.fn();
    const props = {
      onSubmit: mock,
      onChange: jest.fn(),
      formData: { name: "chris", hobbies: ["drinking", "high fiving"] }
    };
    const component = enzyme.mount(
      <Form {...props}>
        <FormInput name="name" value="jimmy" />
      </Form>
    );
    component.simulate("submit");
    expect(mock).toHaveBeenCalledWith({ ...props.formData, name: "jimmy" });
  });
});
