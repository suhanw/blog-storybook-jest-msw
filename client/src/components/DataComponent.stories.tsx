import type { Meta, StoryObj } from "@storybook/react";

import DataComponent from "./DataComponent";
import { handlers } from "../mocks/handlers";

const meta: Meta<typeof DataComponent> = {
  title: "DataComponent",
  component: DataComponent,
};

export default meta;

type Story = StoryObj<typeof DataComponent>;

export const Success: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
};
