import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";

class FormInput extends Component {
  render() {
    let {
      addContClasses,
      contClasses,
      addInputClasses,
      inputClasses,
      addLabelClasses,
      labelClasses,
      errorColorClass,
      error,
      name,
      onChange,
      required,
      type,
      setRef,
      uncontrolled,
      value,
      ...props
    } = this.props;
    let inputId = `${name}-input`;
    return (
      <div className={concatClassNames(contClasses, addContClasses)}>
        <label
          htmlFor={inputId}
          className={concatClassNames(
            labelClasses,
            addLabelClasses,
            error ? errorColorClass : undefined
          )}
        >
          {name}
          {required ? "*" : undefined}
        </label>
        <input
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
      </div>
    );
  }
}

FormInput.defaultProps = {
  inputClasses: [
    "input-reset",
    "ba",
    "pa2",
    "mb2",
    "db",
    "w-100",
    "b--black-20"
  ],
  labelClasses: ["f6", "b", "db", "mb2"],
  error: false,
  errorColorClass: "dark-red",
  required: false,
  type: "text",
  uncontrolled: false
};

FormInput.propTypes = {
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
};

export default FormInput;
