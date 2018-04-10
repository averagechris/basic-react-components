"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "span",
    { className: "courier dark-red bg-light-gray ph1 br2" },
    props.text || props.children
  );
};

module.exports = exports["default"];