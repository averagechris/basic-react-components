var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import ReactDOM from "react-dom";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { propValidator } from "../helpers.js";

enzyme.configure({ adapter: new Adapter() });

export var renderTest = function renderTest(Component, props) {
  test("it renders", function () {
    return expect(function () {
      var div = document.createElement("div");
      ReactDOM.render(React.createElement(Component, props), div);
    }).not.toThrow();
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
export var clickHandlersGetClicked = function clickHandlersGetClicked(Component, requiredProps) {
  var props = Object.keys(Component.propTypes);
  if (!props.includes("onClick")) return;

  test("onClick was not clicked after click simulation", function () {
    var mock = jest.fn();
    var comp = enzyme.mount(React.createElement(Component, _extends({}, requiredProps, { onClick: mock })));
    comp.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
  test("onClick was called a different number of times than it was clicked", function () {
    var mock = jest.fn();
    var comp = enzyme.mount(React.createElement(Component, _extends({}, requiredProps, { onClick: mock })));
    comp.simulate("click").simulate("click").simulate("click");
    expect(mock).toHaveBeenCalledTimes(3);
  });
};
export var runAllComponentSmokeTests = function runAllComponentSmokeTests(Component, requiredProps, toSkip) {
  var skipTests = toSkip || [];
  [renderTest, hasPropTypesTest, defaultPropsHaveTypeTest, requiredPropsAreRequired, clickHandlersGetClicked].filter(function (t) {
    return !skipTests.includes(t.name);
  }).forEach(function (test) {
    return test(Component, requiredProps);
  });
};