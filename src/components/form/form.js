import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import FormInput from "./formInput.js";

class Form extends Component {
  constructor() {
    super();
    ["handleSubmit", "renderChildren"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );
    // this is used to store references to uncontrolled components
    this.formRefs = {};
    // this is used to determine what children this component
    // should "control"
    this.formComponentTypes = [FormInput];
  }

  handleSubmit(e) {
    e.preventDefault();
    // copy formData from props
    let form = { ...this.props.formData };

    // add values from uncontrolled inputs
    Object.values(this.formRefs).forEach(({ name, ref }) => {
      form[name.toLowerCase()] = ref.value;
    });

    // submit form with data from both controlled and
    // uncontrolled components
    this.props.onSubmit(form);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      let passUnmodified = !this.formComponentTypes.includes(child.type);
      if (passUnmodified) return child;

      let { name, uncontrolled } = child.props;
      let childName = name;

      if (uncontrolled) {
        // pass down a function that can pass a reference to the
        // input dom element back up
        return React.cloneElement(child, {
          setRef: element => (this.formRefs[childName] = element)
        });

        // if child should be a controlled form component
        // add onChange and value props to it - to make it
        // "controlled"
      } else {
        return React.cloneElement(child, {
          onChange: ({ name, value }) => this.props.onChange({ name, value }),
          value: this.props.formData[childName] || ""
        });
      }
    });
  }
  render() {
    let { classes, addClasses } = this.props;
    return (
      <form
        className={concatClassNames(classes, addClasses)}
        onSubmit={this.handleSubmit}
      >
        {this.renderChildren()}
      </form>
    );
  }
}

Form.defaultProps = {
  classes: ["pa1", "ph3-m", "ph4-ns"]
};

Form.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  addClasses: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object
};

export default Form;
