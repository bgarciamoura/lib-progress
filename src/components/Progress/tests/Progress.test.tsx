import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Progress } from "../Progress";

describe("Progress", () => {
  it("should render correctly", () => {
    render(
      <Progress
        value={25}
        max={100}
        color="primary"
        striped={false}
        animated={false}
      />
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render correctly with striped", () => {
    render(
      <Progress
        value={25}
        max={100}
        color="primary"
        striped={true}
        animated={false}
      />
    );
    expect(screen.getByRole("progressbar")).toHaveClass("progress-bar-striped");
  });

  it("should render correctly with animated", () => {
    render(
      <Progress
        value={25}
        max={100}
        color="primary"
        striped={false}
        animated={true}
      />
    );
    expect(screen.getByRole("progressbar")).toHaveClass(
      "progress-bar-animated"
    );
  });

  it("should not render the animation with striped false and animated true", () => {
    render(
      <Progress
        value={25}
        max={100}
        color="primary"
        striped={false}
        animated={true}
      />
    );
    expect(screen.getByRole("progressbar")).not.toHaveClass(
      "progress-bar-striped"
    );
  });
});
