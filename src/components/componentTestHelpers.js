import React from "react";
import ReactDOM from "react-dom";

import { propValidator } from "../helpers.js";

export const renderTest = (Component, props) => {
  test("it renders", () => {
    let div = document.createElement("div");
    ReactDOM.render(<Component {...props} />, div);
  });
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

export const runAllComponentSmokeTests = (Component, requiredProps) => {
  [
    renderTest,
    hasPropTypesTest,
    defaultPropsHaveTypeTest,
    requiredPropsAreRequired
  ].forEach(test => test(Component, requiredProps));
};
