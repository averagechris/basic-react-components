import React from "react";
import PropTypes from "prop-types";

import { propValidator } from "../helpers.js";

const getPoints = (max, min, direction) => {
  let points_map = {
    right: [
      {
        x1: min,
        y1: min,
        x2: Math.floor(max * 0.5),
        y2: Math.floor(max * 0.5)
      },
      { x1: min, y1: max, x2: Math.floor(max * 0.5), y2: Math.floor(max * 0.5) }
    ],
    left: [
      {
        x1: min,
        y1: Math.floor(max * 0.5),
        x2: Math.floor(max * 0.5),
        y2: max
      },
      { x1: min, y1: Math.floor(max * 0.5), x2: Math.floor(max * 0.5), y2: min }
    ],
    up: [
      {
        x1: Math.floor(max * 0.5),
        y1: min,
        x2: min,
        y2: Math.floor(max * 0.63)
      },
      {
        x1: Math.floor(max * 0.5),
        y1: min,
        x2: max,
        y2: Math.floor(max * 0.63)
      }
    ],
    down: [
      {
        x1: Math.floor(max * 0.5),
        y1: Math.floor(max * 0.63),
        x2: min,
        y2: min
      },
      {
        x1: Math.floor(max * 0.5),
        y1: Math.floor(max * 0.63),
        x2: max,
        y2: min
      }
    ]
  };

  return points_map[direction];
};

const ArrowIcon = ({
  color,
  direction,
  disabled,
  height,
  width,
  strokeWidth,
  strokeOpacity,
  onClick
}) => {
  let maxSize = height > width ? height : width;
  let points = getPoints(maxSize, 1, direction);

  return (
    <div className="pointer w2 ma2 dim" onClick={onClick}>
      <svg
        height={`${height}px`}
        width={`${width}px`}
        version="1.1"
        xmlns="http://www.w3.org/svg"
      >
        <line
          {...points[0]}
          stroke={color}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
        <line
          {...points[1]}
          stroke={color}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

ArrowIcon.propTypes = {
  color: PropTypes.oneOf(["white", "black"]),
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["right", "left", "up", "down"]).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: propValidator.endsWithpx,
  strokeOpacity: propValidator.isDecimal,
  onClick: PropTypes.func.isRequired
};

ArrowIcon.defaultProps = {
  color: "white",
  disabled: false,
  height: 40,
  width: 40,
  strokeOpacity: "0.8",
  strokeWidth: "2px"
};

export default ArrowIcon;
