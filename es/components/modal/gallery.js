var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal.js";
import ArrowIcon from "../icons/arrowIcon.js";

export var GalleryViewer = function (_Component) {
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

    return React.createElement(
      "div",
      { className: "h-100 w-100 bg-black-80" },
      React.createElement("img", {
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
    return React.createElement(
      Modal,
      {
        closeIconColor: "white",
        bodyColorClass: "bg-black-0",
        handleClose: handleClose
      },
      React.createElement(
        "div",
        { className: "center tc" },
        React.createElement(
          "div",
          { className: "flex items-center justify-center w-100" },
          React.createElement(ArrowIcon, { direction: "left", onClick: function onClick() {
              return changeImage("left");
            } }),
          React.createElement(
            "article",
            { className: "w-100 mw6 mw7-ns" },
            React.createElement("div", {
              className: "vh-75 cover bg-center",
              onClick: this.toggleFullScreenImage,
              style: { background: "url(" + imageSource + ")", cursor: "zoom-in" }
            })
          ),
          React.createElement(ArrowIcon, { direction: "right", onClick: function onClick() {
              return changeImage("right");
            } })
        )
      )
    );
  };

  return GalleryViewer;
}(Component);

GalleryViewer.propTypes = process.env.NODE_ENV !== "production" ? {
  changeImage: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired
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

    return React.createElement(GalleryViewer, {
      handleClose: handleClose,
      imageSource: images[index],
      changeImage: this.changeImage
    });
  };

  return Gallery;
}(Component);

Gallery.propTypes = process.env.NODE_ENV !== "production" ? {
  handleClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
} : {};

export default Gallery;