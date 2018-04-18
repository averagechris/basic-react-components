import React, { Component } from "react";
import PropTypes from "prop-types";

import thecss from "../../thecss.css";
import { concatClassNames, propValidator } from "../../helpers.js";
import ErrorIcon from "../icons/errorIcon.js";

class FormInput extends Component {
  render() {
    let {
      borderColor,
      addContClasses,
      contClasses,
      addInputClasses,
      inputClasses,
      addLabelClasses,
      labelClasses,
      errorColor,
      error,
      name,
      onChange,
      required,
      type,
      setRef,
      uncontrolled,
      value,
      iconFunc,
      ...props
    } = this.props;
    let inputId = `${name}-input`;
    if (error) {
      borderColor = errorColor;
    }
    return (
      <div className={concatClassNames(contClasses, addContClasses)}>
        <label
          htmlFor={inputId}
          className={concatClassNames(
            labelClasses,
            addLabelClasses,
            error ? errorColor : undefined
          )}
        >
          {`${name}${required ? " *" : ""}`}
        </label>
        <div
          className={concatClassNames(
            "flex justify-end items-center h2 ph2 ba br2",
            borderColor
          )}
        >
          <input
            style={{ boxShadow: "none" }}
            id={inputId}
            name={name}
            required={required}
            className={concatClassNames(inputClasses, addInputClasses)}
            type={type}
            aria-describedby={inputId}
            ref={uncontrolled ? r => setRef({ name, ref: r }) : undefined}
            value={uncontrolled ? undefined : value}
            onChange={
              uncontrolled
                ? undefined
                : e => onChange({ name, value: e.target.value })
            }
            {...props}
          />
          <div style={{ width: "1.5rem" }}>{iconFunc(this.props)}</div>
        </div>
      </div>
    );
  }
}

FormInput.defaultProps = {
  contClasses: "mv2",
  inputClasses: [
    "w-100",
    "input-reset input-reset::-moz-focus-inner",
    "bn",
    "db",
    "h-100"
  ],
  labelClasses: ["f6", "b", "db", "mb2"],
  borderColor: "b--black-20",
  error: false,
  errorColor: "dark-red",
  required: false,
  type: "text",
  uncontrolled: false,
  iconFunc: ({ error }) =>
    error ? <ErrorIcon color="red" strokeWidth={3} /> : undefined
};

FormInput.propTypes = {
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
};

export default FormInput;
