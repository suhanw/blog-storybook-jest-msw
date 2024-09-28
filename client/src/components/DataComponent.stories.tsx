import type { Meta, StoryObj } from "@storybook/react";

import DataComponent from "./DataComponent";

const meta: Meta<typeof DataComponent> = {
  title: "Example/DataComponent",
  component: DataComponent,
};

export default meta;

type Story = StoryObj<typeof DataComponent>;

export const Loading: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
