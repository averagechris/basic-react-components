"use strict";

exports.__esModule = true;
exports.TagItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagItem = function TagItem(_ref) {
  var addContClasses = _ref.addContClasses,
      addLabelClasses = _ref.addLabelClasses,
      addValueClasses = _ref.addValueClasses,
      contClasses = _ref.contClasses,
      labelClasses = _ref.labelClasses,
      valueClasses = _ref.valueClasses,
      name = _ref.name,
      label = _ref.label,
      separator = _ref.separator,
      value = _ref.value,
      _onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["addContClasses", "addLabelClasses", "addValueClasses", "contClasses", "labelClasses", "valueClasses", "name", "label", "separator", "value", "onClick", "children"]);

  return _react2.default.createElement(
    "div",
    _extends({ className: (0, _helpers.concatClassNames)(contClasses, addContClasses) }, props),
    label && _react2.default.createElement(
      "span",
      {
        onClick: function onClick() {
          return name ? _onClick(name) : _onClick();
        },
        className: (0, _helpers.concatClassNames)(labelClasses, addLabelClasses)
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
        className: (0, _helpers.concatClassNames)(valueClasses, addValueClasses)
      },
      value
    )
  );
};

exports.TagItem = TagItem;
TagItem.defaultProps = {
  addContClasses: [],
  addValueClasses: [],
  addLabelClasses: [],
  contClasses: ["dib", "ba", "br4", "ph2", "pv1", "pointer"],
  labelClasses: [],
  valueClasses: ["ml2"],
  onClick: function onClick() {},
  separator: true
};

TagItem.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addValueClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  addLabelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  labelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  valueClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string,
  label: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  separator: _propTypes2.default.bool,
  value: _propTypes2.default.node
} : {};

exports.default = TagItem;