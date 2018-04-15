"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

require("../../thecss.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SIZE_MAP = {
  1: "3px",
  2: "7px",
  3: "12px",
  4: "15px",
  5: "17px"
};
var getSize = function getSize(size) {
  return SIZE_MAP[size];
};

var Spinner = function Spinner(_ref) {
  var addClassNames = _ref.addClassNames,
      classNames = _ref.classNames,
      size = _ref.size,
      ringColor = _ref.ringColor,
      spinnerColor = _ref.spinnerColor,
      borderType = _ref.borderType,
      props = _objectWithoutProperties(_ref, ["addClassNames", "classNames", "size", "ringColor", "spinnerColor", "borderType"]);

  return _react2.default.createElement("div", _extends({
    className: (0, _helpers.concatClassNames)(addClassNames, classNames, "h" + size, "w" + size),
    style: {
      border: SIZE_MAP[size] + " " + borderType + " " + ringColor,
      borderTop: SIZE_MAP[size] + " " + borderType + " " + spinnerColor
    }
  }, props));
};

Spinner.defaultProps = {
  addClassNames: [],
  classNames: ["spin-ease-in", "br-100"],
  size: 3,
  ringColor: "#f3f3f3",
  spinnerColor: "#3498db",
  borderType: "solid"
};
Spinner.propTypes = process.env.NODE_ENV !== "production" ? {
  addClassNames: _propTypes2.default.arrayOf(_propTypes2.default.string),
  classNames: _propTypes2.default.arrayOf(_propTypes2.default.string),
  ringColor: _propTypes2.default.string,
  spinnerColor: _propTypes2.default.string,
  size: _propTypes2.default.oneOf([1, 2, 3, 4, 5]),
  borderType: _propTypes2.default.oneOf(_helpers.cssTypes.borderType)
} : {};
exports.default = Spinner;
module.exports = exports["default"];