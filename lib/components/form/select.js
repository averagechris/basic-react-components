"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _arrowIcon = require("../icons/arrowIcon.js");

var _arrowIcon2 = _interopRequireDefault(_arrowIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Select.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        additionalContainerClasses = _props.additionalContainerClasses,
        additionalOptionClasses = _props.additionalOptionClasses,
        additionalSelectClasses = _props.additionalSelectClasses,
        containerClasses = _props.containerClasses,
        optionClasses = _props.optionClasses,
        selectClasses = _props.selectClasses,
        options = _props.options;

    return _react2.default.createElement(
      "div",
      {
        className: [].concat(containerClasses, additionalContainerClasses).join(" ")
      },
      _react2.default.createElement(
        "select",
        {
          className: [].concat(selectClasses, additionalSelectClasses).join(" "),
          ref: function ref(s) {
            return _this2.selectRef = s;
          }
        },
        options.map(function (o, i) {
          return _react2.default.createElement(
            "option",
            {
              className: [].concat(optionClasses, additionalOptionClasses).join(" "),
              key: "Select-option-" + o.text + "-" + i
            },
            o.text
          );
        })
      ),
      _react2.default.createElement(_arrowIcon2.default, {
        containerClasses: ["mt2 mh2"],
        color: "black",
        direction: "down",
        height: 18,
        width: 18
      })
    );
  };

  return Select;
}(_react.Component);

Select.defaultProps = {
  additionalContainerClasses: [],
  additionalOptionClasses: [],
  additionalSelectClasses: [],
  containerClasses: ["flex", "items-center", "ba", "b--black-80", "br1", "pre"],
  optionClasses: ["bg-white"],
  selectClasses: ["w-100", "pa2", "input-reset", "bn"]
};

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalContainerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addititionalOptionClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addititionalSelectClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  optionClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  selectClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({ text: _propTypes2.default.string })).isRequired
} : {};

exports.default = Select;
module.exports = exports["default"];