import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/app/components/Hero";

export default {
  title: "Pages/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

export const Mobile: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphone5",
    },
  },
};

export const Tablet: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const Laptop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
