"use strict";

exports.__esModule = true;
exports.runAllComponentSmokeTests = exports.requiredPropsAreRequired = exports.defaultPropsHaveTypeTest = exports.hasPropTypesTest = exports.renderTest = undefined;

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
var runAllComponentSmokeTests = exports.runAllComponentSmokeTests = function runAllComponentSmokeTests(Component, requiredProps) {
  [renderTest, hasPropTypesTest, defaultPropsHaveTypeTest, requiredPropsAreRequired].forEach(function (test) {
    return test(Component, requiredProps);
  });
};