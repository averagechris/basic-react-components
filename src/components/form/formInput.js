import React, { Component } from "react";
import PropTypes from "prop-types";

class FormInput extends Component {
  render() {
    let {
      containerClasses,
      error,
      inputClasses,
      labelClasses,
      name,
      onChange,
      required,
      type,
      uncontrolled,
      value,
      ...props
    } = this.props;
    let id = `${name}-input`;
    let errorColor = error ? "dark-red" : "";
    let borderColor = error ? "b--dark-red" : "b--black-20";
    let inputProps = {
      id,
      name,
      required,
      className: [...inputClasses, borderColor].join(" "),
      type,
      "aria-describedby": id,
      ...props
    };

    if (!uncontrolled) {
      inputProps.value = value;
      inputProps.onChange = onChange;
    }

    return (
      <div className={containerClasses.join(" ")}>
        <label htmlFor={id} className={[errorColor, ...labelClasses].join(" ")}>
          {name}
          {required ? "*" : ""}
        </label>
        <input {...inputProps} ref={r => (this.inputRef = r)} />
      </div>
    );
  }
}

FormInput.propTypes = {
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.bool,
  inputClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password"]),
  uncontrolled: PropTypes.bool
};

FormInput.defaultProps = {
  containerClasses: [],
  inputClasses: ["input-reset", "ba", "pa2", "mb2", "db", "w-100"],
  labelClasses: ["f6", "b", "db", "mb2"],
  required: false,
  type: "text",
  uncontrolled: false
};

export default FormInput;
