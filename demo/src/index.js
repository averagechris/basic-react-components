import React, { Component } from "react";
import { render } from "react-dom";

import { Modal } from "../../es/";
import Code from "../../src/components/inlineCode.js";

class Demo extends Component {
  render() {
    return (
      <Modal>
        <p>
          hello there <Code>this.isCode()</Code>
        </p>
      </Modal>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
