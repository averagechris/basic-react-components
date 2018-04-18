var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import thecss from "../../thecss.css";
import { concatClassNames, propValidator } from "../../helpers.js";
import ErrorIcon from "../icons/errorIcon.js";

var FormInput = function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FormInput.prototype.render = function render() {
    var _props = this.props,
        borderColor = _props.borderColor,
        addContClasses = _props.addContClasses,
        contClasses = _props.contClasses,
        addInputClasses = _props.addInputClasses,
        inputClasses = _props.inputClasses,
        addLabelClasses = _props.addLabelClasses,
        labelClasses = _props.labelClasses,
        errorColor = _props.errorColor,
        error = _props.error,
        name = _props.name,
        onChange = _props.onChange,
        required = _props.required,
        type = _props.type,
        setRef = _props.setRef,
        uncontrolled = _props.uncontrolled,
        value = _props.value,
        iconFunc = _props.iconFunc,
        props = _objectWithoutProperties(_props, ["borderColor", "addContClasses", "contClasses", "addInputClasses", "inputClasses", "addLabelClasses", "labelClasses", "errorColor", "error", "name", "onChange", "required", "type", "setRef", "uncontrolled", "value", "iconFunc"]);

    var inputId = name + "-input";
    if (error) {
      borderColor = errorColor;
    }
    return React.createElement(
      "div",
      { className: concatClassNames(contClasses, addContClasses) },
      React.createElement(
        "label",
        {
          htmlFor: inputId,
          className: concatClassNames(labelClasses, addLabelClasses, error ? errorColor : undefined)
        },
        "" + name + (required ? " *" : "")
      ),
      React.createElement(
        "div",
        {
          className: concatClassNames("flex justify-end items-center h2 ph2 ba br2", borderColor)
        },
        React.createElement("input", _extends({
          style: { boxShadow: "none" },
          id: inputId,
          name: name,
          required: required,
          className: concatClassNames(inputClasses, addInputClasses),
          type: type,
          "aria-describedby": inputId,
          ref: uncontrolled ? function (r) {
            return setRef({ name: name, ref: r });
          } : undefined,
          value: uncontrolled ? undefined : value,
          onChange: uncontrolled ? undefined : function (e) {
            return onChange({ name: name, value: e.target.value });
          }
        }, props)),
        React.createElement(
          "div",
          { style: { width: "1.5rem" } },
          iconFunc(this.props)
        )
      )
    );
  };

  return FormInput;
}(Component);

FormInput.defaultProps = {
  contClasses: "mv2",
  inputClasses: ["w-100", "input-reset input-reset::-moz-focus-inner", "bn", "db", "h-100"],
  labelClasses: ["f6", "b", "db", "mb2"],
  borderColor: "b--black-20",
  error: false,
  errorColor: "dark-red",
  required: false,
  type: "text",
  uncontrolled: false,
  iconFunc: function iconFunc(_ref) {
    var error = _ref.error;
    return error ? React.createElement(ErrorIcon, { color: "red", strokeWidth: 3 }) : undefined;
  }
};

FormInput.propTypes = process.env.NODE_ENV !== "production" ? {
  borderColor: propValidator.classNameOptional,
  addContClasses: propValidator.classNamesBasic,
  contClasses: propValidator.classNamesBasic,
  addInputClasses: propValidator.classNamesBasic,
  inputClasses: propValidator.classNamesBasic,
  addLabelClasses: propValidator.classNamesBasic,
  labelClasses: propValidator.classNamesBasic,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  iconFunc: PropTypes.func,
  errorColor: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password"]),
  uncontrolled: PropTypes.bool,
  setRef: PropTypes.func
} : {};

export default FormInput;