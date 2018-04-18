"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _thecss = require("../../thecss.css");

var _thecss2 = _interopRequireDefault(_thecss);

var _helpers = require("../../helpers.js");

var _errorIcon = require("../icons/errorIcon.js");

var _errorIcon2 = _interopRequireDefault(_errorIcon);

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
    return _react2.default.createElement(
      "div",
      { className: (0, _helpers.concatClassNames)(contClasses, addContClasses) },
      _react2.default.createElement(
        "label",
        {
          htmlFor: inputId,
          className: (0, _helpers.concatClassNames)(labelClasses, addLabelClasses, error ? errorColor : undefined)
        },
        "" + name + (required ? " *" : "")
      ),
      _react2.default.createElement(
        "div",
        {
          className: (0, _helpers.concatClassNames)("flex justify-end items-center h2 ph2 ba br2", borderColor)
        },
        _react2.default.createElement("input", _extends({
          style: { boxShadow: "none" },
          id: inputId,
          name: name,
          required: required,
          className: (0, _helpers.concatClassNames)(inputClasses, addInputClasses),
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
        _react2.default.createElement(
          "div",
          { style: { width: "1.5rem" } },
          iconFunc(this.props)
        )
      )
    );
  };

  return FormInput;
}(_react.Component);

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
    return error ? _react2.default.createElement(_errorIcon2.default, { color: "red", strokeWidth: 3 }) : undefined;
  }
};

FormInput.propTypes = process.env.NODE_ENV !== "production" ? {
  borderColor: _helpers.propValidator.classNameOptional,
  addContClasses: _helpers.propValidator.classNamesBasic,
  contClasses: _helpers.propValidator.classNamesBasic,
  addInputClasses: _helpers.propValidator.classNamesBasic,
  inputClasses: _helpers.propValidator.classNamesBasic,
  addLabelClasses: _helpers.propValidator.classNamesBasic,
  labelClasses: _helpers.propValidator.classNamesBasic,
  name: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.bool,
  iconFunc: _propTypes2.default.func,
  errorColor: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(["text", "password"]),
  uncontrolled: _propTypes2.default.bool,
  setRef: _propTypes2.default.func
} : {};

exports.default = FormInput;
module.exports = exports["default"];