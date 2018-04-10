"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formInput = require("./formInput.js");

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      form: {}
    };
    _this.formRefs = {};
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    return _this;
  }

  Form.prototype.updateFormState = function updateFormState(_ref) {
    var _this2 = this;

    var fieldName = _ref.fieldName,
        newValue = _ref.newValue;

    this.setState(function (s) {
      var _extends2;

      var newState = _extends({}, s, { form: _extends({}, s.form, (_extends2 = {}, _extends2[fieldName] = newValue, _extends2)) });
      _this2.props.onChange && _this2.props.onChange(newState.form);
      return newState;
    });
  };

  Form.prototype.handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var form = _extends({}, this.state.form);
    Object.values(this.formRefs).forEach(function (r) {
      form[r.props.name] = r.inputRef.value;
    });
    this.props.onSubmit(form);
  };

  Form.prototype._setRef = function _setRef(refName, element) {
    this.formRefs[refName] = element;
  };

  Form.prototype.renderChildren = function renderChildren() {
    var _this3 = this;

    return _react2.default.Children.map(this.props.children, function (child) {
      var formTypes = [_formInput2.default];
      if (child.props.uncontrolled && formTypes.includes(child.type)) {
        return _react2.default.cloneElement(child, {
          ref: function ref(r) {
            return _this3._setRef.bind(_this3, child.props.name, r)();
          }
        });
      } else if (formTypes.includes(child.type)) {
        return _react2.default.cloneElement(child, {
          onChange: function onChange(e) {
            return _this3.updateFormState({
              fieldName: child.props.name,
              newValue: e.target.value
            });
          },
          value: _this3.state.form[child.props.name] || ""
        });
      } else {
        return child;
      }
    });
  };

  Form.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.containerClasses.join(" ") },
      _react2.default.createElement(
        "form",
        { className: "pa1 ph3-m ph4-ns", onSubmit: this.handleSubmit },
        this.renderChildren()
      )
    );
  };

  return Form;
}(_react.Component);

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onChange: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func.isRequired
} : {};

Form.defaultProps = {
  containerClasses: []
};

exports.default = Form;
module.exports = exports["default"];