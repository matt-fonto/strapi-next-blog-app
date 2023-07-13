import Image from "next/image";
import PostCard from "./components/PostCard";
import { Post } from "./types/Post";
import { getPosts } from "./api/httpService";

export default async function Home() {
  // our posts will be an array of Post type
  const posts: Post[] = await getPosts();

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mx-2 md:mx-4 lg:mx-[120px]">
      {posts &&
        // loop through the posts and pass each post as a prop to the PostCard component
        posts.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </div>
  );
}
