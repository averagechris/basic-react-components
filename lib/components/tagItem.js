"use strict";

exports.__esModule = true;
exports.TagItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagItem = function TagItem(_ref) {
  var additionalContainerClasses = _ref.additionalContainerClasses,
      additionalLabelClasses = _ref.additionalLabelClasses,
      additionalValueClasses = _ref.additionalValueClasses,
      containerClasses = _ref.containerClasses,
      labelClasses = _ref.labelClasses,
      valueClasses = _ref.valueClasses,
      name = _ref.name,
      label = _ref.label,
      separator = _ref.separator,
      value = _ref.value,
      _onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["additionalContainerClasses", "additionalLabelClasses", "additionalValueClasses", "containerClasses", "labelClasses", "valueClasses", "name", "label", "separator", "value", "onClick", "children"]);

  return _react2.default.createElement(
    "div",
    _extends({
      className: [].concat(containerClasses, additionalContainerClasses).join(" ")
    }, props),
    label && _react2.default.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: [].concat(labelClasses, additionalLabelClasses).join(" ")
      },
      label,
      separator && " |"
    ),
    children,
    _react2.default.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: [].concat(valueClasses, additionalValueClasses).join(" ")
      },
      value
    )
  );
};

exports.TagItem = TagItem;
TagItem.defaultProps = {
  additionalContainerClasses: [],
  additionalValueClasses: [],
  additionalLabelClasses: [],
  containerClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: function onClick() {},
  separator: true
};

TagItem.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalValueClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  labelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  valueClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string,
  label: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  separator: _propTypes2.default.bool,
  value: _propTypes2.default.node
} : {};

exports.default = TagItem;