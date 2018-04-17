var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";

var FormInput = function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FormInput.prototype.render = function render() {
    var _props = this.props,
        addContClasses = _props.addContClasses,
        contClasses = _props.contClasses,
        addInputClasses = _props.addInputClasses,
        inputClasses = _props.inputClasses,
        addLabelClasses = _props.addLabelClasses,
        labelClasses = _props.labelClasses,
        errorColorClass = _props.errorColorClass,
        error = _props.error,
        name = _props.name,
        onChange = _props.onChange,
        required = _props.required,
        type = _props.type,
        setRef = _props.setRef,
        uncontrolled = _props.uncontrolled,
        value = _props.value,
        props = _objectWithoutProperties(_props, ["addContClasses", "contClasses", "addInputClasses", "inputClasses", "addLabelClasses", "labelClasses", "errorColorClass", "error", "name", "onChange", "required", "type", "setRef", "uncontrolled", "value"]);

    var inputId = name + "-input";
    return React.createElement(
      "div",
      { className: concatClassNames(contClasses, addContClasses) },
      React.createElement(
        "label",
        {
          htmlFor: inputId,
          className: concatClassNames(labelClasses, addLabelClasses, error ? errorColorClass : undefined)
        },
        name,
        required ? "*" : undefined
      ),
      React.createElement("input", _extends({
        id: inputId,
        name: name,
        required: required,
        className: concatClassNames(inputClasses, addLabelClasses),
        type: type,
        "aria-describedby": inputId,
        ref: uncontrolled ? function (r) {
          return setRef({ name: name, ref: r });
        } : undefined,
        value: uncontrolled ? undefined : value,
        onChange: uncontrolled ? undefined : function (e) {
          return onChange({ name: name, value: e.target.value });
        }
      }, props))
    );
  };

  return FormInput;
}(Component);

FormInput.defaultProps = {
  inputClasses: ["input-reset", "ba", "pa2", "mb2", "db", "w-100", "b--black-20"],
  labelClasses: ["f6", "b", "db", "mb2"],
  error: false,
  errorColorClass: "dark-red",
  required: false,
  type: "text",
  uncontrolled: false
};

FormInput.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  addInputClasses: PropTypes.arrayOf(PropTypes.string),
  inputClasses: PropTypes.arrayOf(PropTypes.string),
  addLabelClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorColorClass: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password"]),
  uncontrolled: PropTypes.bool,
  setRef: PropTypes.func
} : {};

export default FormInput;