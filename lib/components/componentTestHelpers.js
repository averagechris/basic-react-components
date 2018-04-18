"use strict";

exports.__esModule = true;
exports.runAllComponentSmokeTests = exports.clickHandlersGetClicked = exports.requiredPropsAreRequired = exports.defaultPropsHaveTypeTest = exports.hasPropTypesTest = exports.renderTest = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _enzyme = require("enzyme");

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _helpers = require("../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var renderTest = exports.renderTest = function renderTest(Component, props) {
  test("it renders", function () {
    return expect(function () {
      var div = document.createElement("div");
      _reactDom2.default.render(_react2.default.createElement(Component, props), div);
    }).not.toThrow();
  });
};
var hasPropTypesTest = exports.hasPropTypesTest = function hasPropTypesTest(Component) {
  test("has defined propTypes and defaultProps", function () {
    expect(Component).toHaveProperty("propTypes");
    expect(Component).toHaveProperty("defaultProps");
  });
};
var defaultPropsHaveTypeTest = exports.defaultPropsHaveTypeTest = function defaultPropsHaveTypeTest(Component) {
  var propTypes = Object.keys(Component.propTypes);
  var defaultProps = Object.keys(Component.defaultProps);

  defaultProps.forEach(function (propName) {
    test("default prop " + propName + " has propType defined", function () {
      expect(Component.propTypes[propName]).not.toBeUndefined();
    });
  });
};
var requiredPropsAreRequired = exports.requiredPropsAreRequired = function requiredPropsAreRequired(Component, requiredProps) {
  var propTypesMarkedRequired = Object.keys(Component.propTypes).filter(function (p) {
    var validator = Component.propTypes[p];
    return !Object.keys(_helpers.propValidator).includes(validator.name) && validator.isRequired === undefined;
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
var clickHandlersGetClicked = exports.clickHandlersGetClicked = function clickHandlersGetClicked(Component, requiredProps) {
  var props = Object.keys(Component.propTypes);
  if (!props.includes("onClick")) return;

  test("onClick was not clicked after click simulation", function () {
    var mock = jest.fn();
    var comp = _enzyme2.default.mount(_react2.default.createElement(Component, _extends({}, requiredProps, { onClick: mock })));
    comp.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
  test("onClick was called a different number of times than it was clicked", function () {
    var mock = jest.fn();
    var comp = _enzyme2.default.mount(_react2.default.createElement(Component, _extends({}, requiredProps, { onClick: mock })));
    comp.simulate("click").simulate("click").simulate("click");
    expect(mock).toHaveBeenCalledTimes(3);
  });
};
var runAllComponentSmokeTests = exports.runAllComponentSmokeTests = function runAllComponentSmokeTests(Component, requiredProps, toSkip) {
  var skipTests = toSkip || [];
  [renderTest, hasPropTypesTest, defaultPropsHaveTypeTest, requiredPropsAreRequired, clickHandlersGetClicked].filter(function (t) {
    return !skipTests.includes(t.name);
  }).forEach(function (test) {
    return test(Component, requiredProps);
  });
};