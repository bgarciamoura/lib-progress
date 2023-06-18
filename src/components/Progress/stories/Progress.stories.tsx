import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components/Progress",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Primary: Story = (args) => <Progress {...args} />;

Primary.args = {
  value: 25,
  max: 100,
  color: "primary",
  striped: false,
  animated: false,
};
