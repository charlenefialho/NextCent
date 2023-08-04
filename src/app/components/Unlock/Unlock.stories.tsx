import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { IUnlock, Unlock } from "@/app/components/Unlock"
import mobileLoginRafikin from "@/app/assets/svg/mobileLoginRafikin.svg";

export default {
  title: "Pages/Landing Page",
  component: Unlock,
  args:{
    imageUrl: `${mobileLoginRafikin}`,
    title:"The unseen of spending three years at Pixelgrade",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
  },
  argTypes:{
    imageUrl: {control: 'text'},
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta<IUnlock>;

export const Mobile: StoryObj<IUnlock> = {
  parameters: {
    viewport: {
      defaultViewport: "iphone5",
    },
  },
};

export const Tablet: StoryObj<IUnlock> = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const Laptop: StoryObj<IUnlock> = {
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj<IUnlock> = {
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
