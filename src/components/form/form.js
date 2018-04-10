import React, { Component } from "react";
import PropTypes from "prop-types";

import FormInput from "./formInput.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {}
    };
    this.formRefs = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }
  updateFormState({ fieldName, newValue }) {
    this.setState(s => {
      let newState = { ...s, form: { ...s.form, [fieldName]: newValue } };
      this.props.onChange && this.props.onChange(newState.form);
      return newState;
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let form = { ...this.state.form };
    Object.values(this.formRefs).forEach(r => {
      form[r.props.name] = r.inputRef.value;
    });
    this.props.onSubmit(form);
  }

  _setRef(refName, element) {
    this.formRefs[refName] = element;
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      const formTypes = [FormInput];
      if (child.props.uncontrolled && formTypes.includes(child.type)) {
        return React.cloneElement(child, {
          ref: r => this._setRef.bind(this, child.props.name, r)()
        });
      } else if (formTypes.includes(child.type)) {
        return React.cloneElement(child, {
          onChange: e =>
            this.updateFormState({
              fieldName: child.props.name,
              newValue: e.target.value
            }),
          value: this.state.form[child.props.name] || ""
        });
      } else {
        return child;
      }
    });
  }
  render() {
    return (
      <div className={this.props.containerClasses.join(" ")}>
        <form className="pa1 ph3-m ph4-ns" onSubmit={this.handleSubmit}>
          {this.renderChildren()}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  containerClasses: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  containerClasses: []
};

export default Form;
