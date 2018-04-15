function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import ArrowIcon from "../icons/arrowIcon.js";

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Select.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        addContClasses = _props.addContClasses,
        addOptionClasses = _props.addOptionClasses,
        addSelectClasses = _props.addSelectClasses,
        contClasses = _props.contClasses,
        optionClasses = _props.optionClasses,
        selectClasses = _props.selectClasses,
        options = _props.options;

    return React.createElement(
      "div",
      { className: concatClassNames(contClasses, addContClasses) },
      React.createElement(
        "select",
        {
          className: concatClassNames(selectClasses, addSelectClasses),
          ref: function ref(s) {
            return _this2.selectRef = s;
          }
        },
        options.map(function (o, i) {
          return React.createElement(
            "option",
            {
              className: concatClassNames(optionClasses, addOptionClasses),
              key: "Select-option-" + o.text + "-" + i
            },
            o.text
          );
        })
      ),
      React.createElement(ArrowIcon, {
        contClasses: ["mt2", "mh2"],
        color: "black",
        direction: "down",
        height: 18,
        width: 18
      })
    );
  };

  return Select;
}(Component);

Select.defaultProps = {
  addContClasses: [],
  addOptionClasses: [],
  addSelectClasses: [],
  contClasses: ["flex", "items-center", "ba", "b--black-80", "br1", "pre"],
  optionClasses: ["bg-white"],
  selectClasses: ["w-100", "pa2", "input-reset", "bn"]
};

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  addititionalOptionClasses: PropTypes.arrayOf(PropTypes.string),
  addititionalSelectClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  optionClasses: PropTypes.arrayOf(PropTypes.string),
  selectClasses: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })).isRequired
} : {};

export default Select;