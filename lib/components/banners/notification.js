"use strict";

exports.__esModule = true;

var _Notification$default;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

var _messageBanner = require("./messageBanner.js");

var _messageBanner2 = _interopRequireDefault(_messageBanner);

var _infoIcon = require("../icons/infoIcon.js");

var _infoIcon2 = _interopRequireDefault(_infoIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDefaultIcon = function renderDefaultIcon() {
  return _react2.default.createElement(
    "div",
    { className: "w-70" },
    _react2.default.createElement(_infoIcon2.default, { color: "white", strokeWidth: 5 })
  );
};

var Notification = function Notification(_ref) {
  var addContClasses = _ref.addContClasses,
      contClasses = _ref.contClasses,
      borderColor = _ref.borderColor,
      highlightFontColor = _ref.highlightFontColor,
      highlightColor = _ref.highlightColor,
      backgroundColor = _ref.backgroundColor,
      fontColor = _ref.fontColor,
      shadow = _ref.shadow,
      onClick = _ref.onClick,
      icon = _ref.icon,
      children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: (0, _helpers.concatClassNames)(contClasses, addContClasses, shadow) },
    _react2.default.createElement(
      _messageBanner2.default,
      {
        contClasses: ["w-100 h-100", "flex justify-start items-center", "ba br1", borderColor],
        bgColor: false,
        fontColor: false,
        onClick: onClick
      },
      _react2.default.createElement(
        "div",
        {
          className: (0, _helpers.concatClassNames)("h-100", "w2", "flex items-center justify-center", highlightColor, highlightFontColor || undefined, onClick ? "pointer" : undefined)
        },
        icon
      ),
      _react2.default.createElement(
        "div",
        { className: (0, _helpers.concatClassNames)("pa3", backgroundColor, fontColor) },
        children
      )
    )
  );
};

Notification.defaultProps = (_Notification$default = {
  contClasses: ["dib"],
  borderColor: "b--blue",
  highlightFontColor: "white",
  highlightColor: "bg-blue"
}, _Notification$default["highlightFontColor"] = "white", _Notification$default.icon = renderDefaultIcon(), _Notification$default.shadow = "shadow-1", _Notification$default);
Notification.propTypes = process.env.NODE_ENV !== "production" ? {
  addContClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  contClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  icon: _propTypes2.default.node,
  borderColor: _propTypes2.default.string,
  highlightColor: _propTypes2.default.string,
  highlightFontColor: _helpers.propValidator.classNameOptional,
  backgroundColor: _helpers.propValidator.classNameOptional,
  fontColor: _helpers.propValidator.classNameOptional,
  shadow: _helpers.propValidator.classNameOptional
} : {};

exports.default = Notification;
module.exports = exports["default"];