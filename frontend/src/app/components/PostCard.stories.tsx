import { PostCard } from "./PostCard";

export default {
  title: "Components/PostCard",
  component: PostCard,

  parameters: {
    docs: {
      description: {
        component: "Card to display post summary and actions",
      },
    },
  },

  argTypes: {
    post: {
      description: "The post object to display",
    },
  },
};

const Template = (args: any) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  post: {
    id: 1,
    attributes: {
      title: "My First Post",
      body: "This is the body of my first post",
      author: "John Doe",
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-02T00:00:00.000Z",
      publishedAt: "2021-01-01T00:00:00.000Z",
    },
  },
};

export const ExampleII = Template.bind({});
ExampleII.args = {
  post: {
    id: 2,
    attributes: {
      title: "Hi!",
      body: "This is the body of my first post",
      author: "John Doe",
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-02T00:00:00.000Z",
      publishedAt: "2021-01-01T00:00:00.000Z",
    },
  },
};
