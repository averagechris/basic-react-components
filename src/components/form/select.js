import React, { Component } from "react";
import PropTypes from "prop-types";

import ArrowIcon from "../icons/arrowIcon.js";

class Select extends Component {
  render() {
    let {
      addContClasses,
      addOptionClasses,
      addSelectClasses,
      contClasses,
      optionClasses,
      selectClasses,
      options
    } = this.props;
    return (
      <div className={[...contClasses, ...addContClasses].join(" ")}>
        <select
          className={[...selectClasses, ...addSelectClasses].join(" ")}
          ref={s => (this.selectRef = s)}
        >
          {options.map((o, i) => (
            <option
              className={[...optionClasses, ...addOptionClasses].join(" ")}
              key={`Select-option-${o.text}-${i}`}
            >
              {o.text}
            </option>
          ))}
        </select>
        <ArrowIcon
          contClasses={["mt2 mh2"]}
          color="black"
          direction="down"
          height={18}
          width={18}
        />
      </div>
    );
  }
}

Select.defaultProps = {
  addContClasses: [],
  addOptionClasses: [],
  addSelectClasses: [],
  contClasses: ["flex", "items-center", "ba", "b--black-80", "br1", "pre"],
  optionClasses: ["bg-white"],
  selectClasses: ["w-100", "pa2", "input-reset", "bn"]
};

Select.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  addititionalOptionClasses: PropTypes.arrayOf(PropTypes.string),
  addititionalSelectClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  optionClasses: PropTypes.arrayOf(PropTypes.string),
  selectClasses: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string }))
    .isRequired
};

export default Select;
