"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _react2.default.createElement(
      "div",
      { className: (0, _helpers.concatClassNames)(contClasses, addContClasses) },
      _react2.default.createElement(
        "label",
        {
          htmlFor: inputId,
          className: (0, _helpers.concatClassNames)(labelClasses, addLabelClasses, error ? errorColorClass : undefined)
        },
        name,
        required ? "*" : undefined
      ),
      _react2.default.createElement("input", _extends({
        id: inputId,
        name: name,
        required: required,
        className: (0, _helpers.concatClassNames)(inputClasses, addLabelClasses),
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
}(_react.Component);

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
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addInputClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  inputClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addLabelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  labelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.bool,
  errorColorClass: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(["text", "password"]),
  uncontrolled: _propTypes2.default.bool,
  setRef: _propTypes2.default.func
} : {};

exports.default = FormInput;
module.exports = exports["default"];