"use strict";

exports.__esModule = true;
exports.GalleryViewer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require("../../helpers.js");

var _modal = require("./modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _arrowIcon = require("../icons/arrowIcon.js");

var _arrowIcon2 = _interopRequireDefault(_arrowIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleryViewer = exports.GalleryViewer = function (_Component) {
  _inherits(GalleryViewer, _Component);

  function GalleryViewer() {
    _classCallCheck(this, GalleryViewer);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = { fullScreenImage: false };
    _this.toggleFullScreenImage = _this.toggleFullScreenImage.bind(_this);
    _this.renderFullScreenImage = _this.renderFullScreenImage.bind(_this);
    return _this;
  }

  GalleryViewer.prototype.toggleFullScreenImage = function toggleFullScreenImage() {
    this.setState(function (s) {
      return _extends({}, s, {
        fullScreenImage: !s.fullScreenImage
      });
    });
  };

  GalleryViewer.prototype.renderFullScreenImage = function renderFullScreenImage() {
    var _props = this.props,
        imageSource = _props.imageSource,
        changeImage = _props.changeImage;

    return _react2.default.createElement(
      "div",
      { className: (0, _helpers.concatClassNames)(["h-100", "w-100", "bg-black-80"]) },
      _react2.default.createElement("img", {
        src: imageSource,
        className: "h-100 w-100",
        style: { cursor: "zoom-out" },
        onClick: this.toggleFullScreenImage
      })
    );
  };

  GalleryViewer.prototype.render = function render() {
    var _props2 = this.props,
        imageSource = _props2.imageSource,
        changeImage = _props2.changeImage,
        handleClose = _props2.handleClose;
    var fullScreenImage = this.state.fullScreenImage;

    if (fullScreenImage) {
      return this.renderFullScreenImage();
    }
    return _react2.default.createElement(
      _modal2.default,
      {
        closeIconColor: "white",
        bodyColorClass: "bg-black-0",
        handleClose: handleClose
      },
      _react2.default.createElement(
        "div",
        { className: "center tc" },
        _react2.default.createElement(
          "div",
          { className: "flex items-center justify-center w-100" },
          _react2.default.createElement(_arrowIcon2.default, { direction: "left", onClick: function onClick() {
              return changeImage("left");
            } }),
          _react2.default.createElement(
            "article",
            { className: "w-100 mw6 mw7-ns" },
            _react2.default.createElement("div", {
              className: "vh-75 cover bg-center",
              onClick: this.toggleFullScreenImage,
              style: { background: "url(" + imageSource + ")", cursor: "zoom-in" }
            })
          ),
          _react2.default.createElement(_arrowIcon2.default, { direction: "right", onClick: function onClick() {
              return changeImage("right");
            } })
        )
      )
    );
  };

  return GalleryViewer;
}(_react.Component);

GalleryViewer.propTypes = process.env.NODE_ENV !== "production" ? {
  changeImage: _propTypes2.default.func.isRequired,
  imageSource: _propTypes2.default.string.isRequired
} : {};

var Gallery = function (_Component2) {
  _inherits(Gallery, _Component2);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this2 = _possibleConstructorReturn(this, _Component2.call(this));

    _this2.state = { index: 0 };
    _this2.changeImage = _this2.changeImage.bind(_this2);
    return _this2;
  }

  Gallery.prototype.changeImage = function changeImage(d) {
    var index = this.state.index;

    var newIndex = void 0;
    if ("left" === d) {
      newIndex = index - 1;
    } else if ("right" === d) {
      newIndex = index + 1;
    } else if (Number(d) % 1 == 0) {
      newIndex = num;
    }

    if (newIndex < this.props.images.length - 1 && newIndex >= 0) {
      this.setState(function (s) {
        return _extends({}, s, { index: newIndex });
      });
    }
  };

  Gallery.prototype.render = function render() {
    var _props3 = this.props,
        images = _props3.images,
        handleClose = _props3.handleClose;
    var index = this.state.index;

    return _react2.default.createElement(GalleryViewer, {
      handleClose: handleClose,
      imageSource: images[index],
      changeImage: this.changeImage
    });
  };

  return Gallery;
}(_react.Component);

Gallery.propTypes = process.env.NODE_ENV !== "production" ? {
  handleClose: _propTypes2.default.func.isRequired,
  images: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
} : {};

exports.default = Gallery;