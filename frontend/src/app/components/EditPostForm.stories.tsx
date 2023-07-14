import { Post } from "../types/Post";
import { EditPostForm } from "./EditPostForm";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/EditPostForm",
  component: EditPostForm,
} as Meta<typeof EditPostForm>;

// @ts-ignore
const Template: StoryObj<typeof EditPostForm> = (args) => (
  <EditPostForm {...args} />
);

// @ts-ignore
export const Default = Template.bind({});

Default.parameters = {
  nextjs: {
    appDirectory: true,
  },
};

Default.args = {
  post: {
    id: 1,
    attributes: {
      title: "Test Post",
      author: "John Doe",
      body: "Lorem ipsum...",
    },
  } as Post,
};
