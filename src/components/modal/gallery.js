import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import Modal from "./modal.js";
import ArrowIcon from "../icons/arrowIcon.js";

export class GalleryViewer extends Component {
  constructor() {
    super();
    this.state = { fullScreenImage: false };
    this.toggleFullScreenImage = this.toggleFullScreenImage.bind(this);
    this.renderFullScreenImage = this.renderFullScreenImage.bind(this);
  }
  toggleFullScreenImage() {
    this.setState(s => ({
      ...s,
      fullScreenImage: !s.fullScreenImage
    }));
  }
  renderFullScreenImage() {
    let { imageSource, changeImage } = this.props;
    return (
      <div className={concatClassNames(["h-100", "w-100", "bg-black-80"])}>
        <img
          src={imageSource}
          className="h-100 w-100"
          style={{ cursor: "zoom-out" }}
          onClick={this.toggleFullScreenImage}
        />
      </div>
    );
  }
  render() {
    let { imageSource, changeImage, handleClose } = this.props;
    let { fullScreenImage } = this.state;
    if (fullScreenImage) {
      return this.renderFullScreenImage();
    }
    return (
      <Modal
        closeIconColor="white"
        bodyColorClass="bg-black-0"
        handleClose={handleClose}
      >
        <div className="center tc">
          <div className="flex items-center justify-center w-100">
            <ArrowIcon direction="left" onClick={() => changeImage("left")} />
            <article className="w-100 mw6 mw7-ns">
              <div
                className="vh-75 cover bg-center"
                onClick={this.toggleFullScreenImage}
                style={{ background: `url(${imageSource})`, cursor: "zoom-in" }}
              />
            </article>
            <ArrowIcon direction="right" onClick={() => changeImage("right")} />
          </div>
        </div>
      </Modal>
    );
  }
}

GalleryViewer.propTypes = {
  changeImage: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired
};

class Gallery extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(d) {
    let { index } = this.state;
    let newIndex;
    if ("left" === d) {
      newIndex = index - 1;
    } else if ("right" === d) {
      newIndex = index + 1;
    } else if (Number(d) % 1 == 0) {
      newIndex = num;
    }

    if (newIndex < this.props.images.length - 1 && newIndex >= 0) {
      this.setState(s => ({ ...s, index: newIndex }));
    }
  }

  render() {
    let { images, handleClose } = this.props;
    let { index } = this.state;
    return (
      <GalleryViewer
        handleClose={handleClose}
        imageSource={images[index]}
        changeImage={this.changeImage}
      />
    );
  }
}

Gallery.defaultProps = {};
Gallery.propTypes = {
  handleClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
