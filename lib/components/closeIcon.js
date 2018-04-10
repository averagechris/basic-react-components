"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    { className: "pointer w1", onClick: props.onClick },
    _react2.default.createElement(
      "svg",
      { height: "12px", width: "12px", version: "1.1", xmlns: "http://www.w3.org/svg" },
      _react2.default.createElement("line", {
        x1: "1",
        y1: "11",
        x2: "11",
        y2: "1",
        stroke: props.color,
        strokeOpacity: ".70",
        strokeWidth: "2px"
      }),
      _react2.default.createElement("line", {
        x1: "1",
        y1: "1",
        x2: "11",
        y2: "11",
        stroke: props.color,
        strokeOpacity: ".70",
        strokeWidth: "2px"
      })
    )
  );
};

module.exports = exports["default"];