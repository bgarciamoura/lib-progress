import React from "react";
import { ProgressProps } from "./types/Progress";
import { StyledProgress } from "./styles/StyledProgress";

const Progress: React.FC<ProgressProps> = ({
  color,
  value,
  max,
  striped,
  animated,
}) => {
  return (
    <StyledProgress>
      <div
        className={`progress-bar ${color} ${
          striped ? "progress-bar-striped" : ""
        } ${animated ? "progress-bar-animated" : ""}`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {value}%
      </div>
    </StyledProgress>
  );
};

export { Progress };
