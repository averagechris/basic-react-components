import React, { Component } from "react";
import PropTypes from "prop-types";

import { concatClassNames } from "../../helpers.js";
import CloseIcon from "../icons/closeIcon.js";

class Modal extends Component {
  componentDidMount() {
    this.dimmerRef.focus();
  }

  render() {
    let {
      addDimmerClasses,
      addBodyClasses,
      bodyClasses,
      dimmerClasses,
      bodyColorClass,
      dimmerColorClass,
      closeIconColor,
      handleClose,
      ...props
    } = this.props;

    return (
      <div
        onKeyDown={e => e.key === "Escape" && handleClose(e)}
        tabIndex="0"
        className={concatClassNames(
          dimmerClasses,
          addDimmerClasses,
          dimmerColorClass
        )}
        ref={div => {
          this.dimmerRef = div;
        }}
      >
        <div
          className={concatClassNames(
            bodyClasses,
            addBodyClasses,
            bodyColorClass
          )}
        >
          <CloseIcon onClick={handleClose} color={closeIconColor} />
          <div className="center w-90 ha mt3">{props.children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  addBodyClasses: PropTypes.arrayOf(PropTypes.string),
  addDimmerClasses: PropTypes.arrayOf(PropTypes.string),
  bodyClasses: PropTypes.arrayOf(PropTypes.string),
  dimmerClasses: PropTypes.arrayOf(PropTypes.string),
  dimmerColorClass: PropTypes.string,
  closeIconColor: PropTypes.string,
  handleClose: PropTypes.func.isRequired
};
Modal.defaultProps = {
  addBodyClasses: [],
  addDimmerClasses: [],
  bodyClasses: [
    "relative",
    "top-0",
    "top-1-m",
    "top-2-ns",
    "pa2",
    "mw7-m",
    "mw8-ns",
    "center",
    "br3"
  ],
  dimmerClasses: [
    "fixed",
    "top-0",
    "left-0",
    "db",
    "z-1",
    "w-100",
    "h-100",
    "pt3",
    "bg-black-70",
    "overflow-container"
  ],
  bodyColorClass: "bg-white",
  dimmerColorClass: "bg-black-70",
  closeIconColor: "black",
  transparent: false
};
export default Modal;
