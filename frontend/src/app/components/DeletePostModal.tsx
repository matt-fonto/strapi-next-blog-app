import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DeletePostModal from "./DeletePostModal";

export default {
  title: "Components/DeletePostModal",
  component: DeletePostModal,
  argTypes: {
    isOpen: { control: "boolean" },
    onRequestClose: { action: "requested close" },
    onDelete: { action: "deleted" },
  },
} as Meta;

const Template: StoryObj = (args) => <DeletePostModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onRequestClose: action("close"),
  onDelete: action("delete"),
};
