import React, { Component } from "react";

import CloseIcon from "./closeIcon.js";

export default class Modal extends Component {
  componentDidMount() {
    this.dimmerRef.focus();
  }

  render() {
    let {
      children,
      dimmerColorClass,
      handleClose,
      transparent,
      visible,
      ...props
    } = this.props;
    let dimmerClasses = [
      "fixed",
      "top-0",
      "left-0",
      "db",
      "z-1",
      "w-100",
      "h-100",
      "pt3",
      "bg-black-70",
      "overflow-container",
      `${dimmerColorClass || "bg-black-70"}`,
      `${visible || "dn"}`
    ];
    let bodyClasses = [
      "relative",
      "top-0",
      "top-1-m",
      "top-2-ns",
      "pa2",
      "mw7-m",
      "mw8-ns",
      "center",
      "br3",
      `${transparent || "bg-white"}`
    ];

    return (
      <div
        onKeyDown={e => e.key === "Escape" && handleClose(e)}
        tabIndex="0"
        className={dimmerClasses.join(" ")}
        ref={div => {
          this.dimmerRef = div;
        }}
      >
        <div className={bodyClasses.join(" ")}>
          <CloseIcon
            onClick={handleClose}
            color={transparent ? "white" : "black"}
          />
          <div className="center w-90 ha mt3">{children}</div>
        </div>
      </div>
    );
  }
}
