import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./index";

const meta: Meta<IButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "inline-radio" },
    },
    disabled: { control: { type: "boolean" } },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    className:"py-4 px-8"
  },
};

export const Disabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
    className:"py-4 px-8"
  },
};

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    variant: "secondary",
    className:"py-4 px-8"
  },
};

export const SecondaryDisabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
    className:"py-4 px-8"
  },
};
export const Terciary: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    variant: "tertiary",
    className:"py-4 px-8"
  },
};
export const TerciaryDisabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
    className:"py-4 px-8"
  },
};
