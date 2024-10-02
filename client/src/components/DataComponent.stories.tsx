import type { Meta, StoryObj } from "@storybook/react";

import DataComponent from "./DataComponent";
import { getUserMockHandler } from "../api/get-user-mock";

const meta: Meta<typeof DataComponent> = {
  title: "DataComponent",
  component: DataComponent,
};

export default meta;

type Story = StoryObj<typeof DataComponent>;

export const Success: Story = {
  parameters: {
    msw: {
      handlers: [getUserMockHandler],
    },
  },
};
