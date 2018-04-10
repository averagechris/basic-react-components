"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _closeIcon = require("../closeIcon.js");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    this.dimmerRef.focus();
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        additionalDimmerClasses = _props.additionalDimmerClasses,
        additionalBodyClasses = _props.additionalBodyClasses,
        bodyClasses = _props.bodyClasses,
        dimmerClasses = _props.dimmerClasses,
        bodyColorClass = _props.bodyColorClass,
        dimmerColorClass = _props.dimmerColorClass,
        closeIconColor = _props.closeIconColor,
        handleClose = _props.handleClose,
        props = _objectWithoutProperties(_props, ["additionalDimmerClasses", "additionalBodyClasses", "bodyClasses", "dimmerClasses", "bodyColorClass", "dimmerColorClass", "closeIconColor", "handleClose"]);

    return _react2.default.createElement(
      "div",
      {
        onKeyDown: function onKeyDown(e) {
          return e.key === "Escape" && handleClose(e);
        },
        tabIndex: "0",
        className: [].concat(dimmerClasses, [additionalDimmerClasses, dimmerColorClass]).join(" "),
        ref: function ref(div) {
          _this2.dimmerRef = div;
        }
      },
      _react2.default.createElement(
        "div",
        {
          className: [].concat(bodyClasses, additionalBodyClasses, [bodyColorClass]).join(" ")
        },
        _react2.default.createElement(_closeIcon2.default, { onClick: handleClose, color: closeIconColor }),
        _react2.default.createElement(
          "div",
          { className: "center w-90 ha mt3" },
          props.children
        )
      )
    );
  };

  return Modal;
}(_react.Component);

Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalBodyClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  additionalDimmerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  bodyClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  dimmerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  dimmerColorClass: _propTypes2.default.string,
  closeIconColor: _propTypes2.default.string,
  handleClose: _propTypes2.default.func.isRequired
} : {};
Modal.defaultProps = {
  additionalBodyClasses: [],
  additionalDimmerClasses: [],
  bodyClasses: ["relative", "top-0", "top-1-m", "top-2-ns", "pa2", "mw7-m", "mw8-ns", "center", "br3"],
  dimmerClasses: ["fixed", "top-0", "left-0", "db", "z-1", "w-100", "h-100", "pt3", "bg-black-70", "overflow-container"],
  bodyColorClass: "bg-white",
  dimmerColorClass: "bg-black-70",
  closeIconColor: "black",
  transparent: false
};
exports.default = Modal;
module.exports = exports["default"];