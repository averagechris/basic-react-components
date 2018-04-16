import React from "react";
import ReactDOM from "react-dom";

import { propValidator } from "../helpers.js";

export var renderTest = function renderTest(Component, props) {
  test("it renders", function () {
    var div = document.createElement("div");
    ReactDOM.render(React.createElement(Component, props), div);
  });
};

export var hasPropTypesTest = function hasPropTypesTest(Component) {
  test("has defined propTypes and defaultProps", function () {
    expect(Component).toHaveProperty("propTypes");
    expect(Component).toHaveProperty("defaultProps");
  });
};

export var defaultPropsHaveTypeTest = function defaultPropsHaveTypeTest(Component) {
  var propTypes = Object.keys(Component.propTypes);
  var defaultProps = Object.keys(Component.defaultProps);

  defaultProps.forEach(function (propName) {
    test("default prop " + propName + " has propType defined", function () {
      expect(Component.propTypes[propName]).not.toBeUndefined();
    });
  });
};

export var requiredPropsAreRequired = function requiredPropsAreRequired(Component, requiredProps) {
  var propTypesMarkedRequired = Object.keys(Component.propTypes).filter(function (p) {
    var validator = Component.propTypes[p];
    return !Object.keys(propValidator).includes(validator.name) && validator.isRequired === undefined;
  });
  requiredProps = Object.keys(requiredProps);

  propTypesMarkedRequired.forEach(function (p) {
    test("required prop " + p + " is in requiredProps", function () {
      return expect(requiredProps.includes(p)).toBe(true);
    });
  });

  requiredProps.forEach(function (p) {
    test("required prop " + p + " is marked as required", function () {
      return expect(propTypesMarkedRequired.includes(p)).toBe(true);
    });
  });
};

export var runAllComponentSmokeTests = function runAllComponentSmokeTests(Component, requiredProps) {
  [renderTest, hasPropTypesTest, defaultPropsHaveTypeTest, requiredPropsAreRequired].forEach(function (test) {
    return test(Component, requiredProps);
  });
};