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
      options: ["primary", "secondary", "terciary"],
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
  },
};

export const Disabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const SecondaryDisabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
export const Terciary: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};
export const TerciaryDisabled: StoryObj<IButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
