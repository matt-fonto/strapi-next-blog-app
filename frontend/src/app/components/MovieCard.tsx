import { Post } from "../types/Post";

interface MovieCardProps {
  post: Post;
}

function MovieCard({ post }: MovieCardProps) {
  const {
    attributes: {
      slug,
      author,
      title,
      body,
      createdAt,
      updatedAt,
      publishedAt,
    },
  } = post;

  return (
    <div className="border rounded-md p-4">
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default MovieCard;
