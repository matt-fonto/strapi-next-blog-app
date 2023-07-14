import { Meta, StoryObj } from "@storybook/react";
import PostCard, { PostCardProps } from "./PostCard";

export default {
  title: "Components/PostCard",
  component: PostCard,
  args: {
    post: {
      id: 1,
      attributes: {
        author: "John Doe",
        title: "My first post",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    },
  },
} as Meta<PostCardProps>;

const Template: StoryObj<PostCardProps> = (args) => <PostCard {...args} />;

export const Default = Template.bind({});

// 24:00
