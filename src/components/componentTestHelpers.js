import React from "react";
import ReactDOM from "react-dom";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { propValidator } from "../helpers.js";

enzyme.configure({ adapter: new Adapter() });

export const renderTest = (Component, props) => {
  test("it renders", () =>
    expect(() => {
      let div = document.createElement("div");
      ReactDOM.render(<Component {...props} />, div);
    }).not.toThrow());
};
export const hasPropTypesTest = Component => {
  test("has defined propTypes and defaultProps", () => {
    expect(Component).toHaveProperty("propTypes");
    expect(Component).toHaveProperty("defaultProps");
  });
};
export const defaultPropsHaveTypeTest = Component => {
  let propTypes = Object.keys(Component.propTypes);
  let defaultProps = Object.keys(Component.defaultProps);

  defaultProps.forEach(propName => {
    test(`default prop ${propName} has propType defined`, () => {
      expect(Component.propTypes[propName]).not.toBeUndefined();
    });
  });
};
export const requiredPropsAreRequired = (Component, requiredProps) => {
  let propTypesMarkedRequired = Object.keys(Component.propTypes).filter(p => {
    let validator = Component.propTypes[p];
    return (
      !Object.keys(propValidator).includes(validator.name) &&
      validator.isRequired === undefined
    );
  });
  requiredProps = Object.keys(requiredProps);

  propTypesMarkedRequired.forEach(p => {
    test(`required prop ${p} is in requiredProps`, () =>
      expect(requiredProps.includes(p)).toBe(true));
  });

  requiredProps.forEach(p => {
    test(`required prop ${p} is marked as required`, () =>
      expect(propTypesMarkedRequired.includes(p)).toBe(true));
  });
};
export const clickHandlersGetClicked = (Component, requiredProps) => {
  let props = Object.keys(Component.propTypes);
  if (!props.includes("onClick")) return;

  test("onClick was not clicked after click simulation", () => {
    let mock = jest.fn();
    let comp = enzyme.mount(<Component {...requiredProps} onClick={mock} />);
    comp.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
  test("onClick was called a different number of times than it was clicked", () => {
    let mock = jest.fn();
    let comp = enzyme.mount(<Component {...requiredProps} onClick={mock} />);
    comp
      .simulate("click")
      .simulate("click")
      .simulate("click");
    expect(mock).toHaveBeenCalledTimes(3);
  });
};
export const runAllComponentSmokeTests = (Component, requiredProps, toSkip) => {
  let skipTests = toSkip || [];
  [
    renderTest,
    hasPropTypesTest,
    defaultPropsHaveTypeTest,
    requiredPropsAreRequired,
    clickHandlersGetClicked
  ]
    .filter(t => !skipTests.includes(t.name))
    .forEach(test => test(Component, requiredProps));
};
