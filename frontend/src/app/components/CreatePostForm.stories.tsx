import CreatePostForm from "./CreatePostForm";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/CreatePostForm",
  component: CreatePostForm,
} as Meta;

// Componets that used useRouter from next/navigation
export const Default: StoryObj = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
