import React, { Component } from "react";
import { render } from "react-dom";

import Code from "../../src/components/inlineCode.js";

class Demo extends Component {
  render() {
    return (
      <p>
        hello there <Code>this.isCode()</Code>
      </p>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
