import Image from "next/image";
import MovieCard from "./components/MovieCard";
import { Post } from "./types/Post";

async function getPosts() {
  try {
    // get posts from our api
    const res = await fetch(`http://localhost:1337/api/posts`, {
      next: {
        revalidate: 10,
      },
    });

    // destructuring the data from the response
    const { data } = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export default async function Home() {
  // our posts will be an array of Post type
  const posts: Post[] = await getPosts();

  return (
    <div className="mx-10">
      <h1>Posts</h1>
      {posts &&
        // loop through the posts and pass each post as a prop to the MovieCard component
        posts.map((post: Post) => {
          return <MovieCard key={post.id} post={post} />;
        })}
    </div>
  );
}
