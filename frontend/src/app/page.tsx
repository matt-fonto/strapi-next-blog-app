import Image from "next/image";
import PostCard from "./components/PostCard";
import { Post } from "./types/Post";
import { getPosts } from "./api/httpService";

export default async function Home() {
  // our posts will be an array of Post type
  const posts: Post[] = await getPosts();

  return (
    <div className="mx-10">
      {posts &&
        // loop through the posts and pass each post as a prop to the PostCard component
        posts.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </div>
  );
}
