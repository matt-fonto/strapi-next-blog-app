"use client";
import Link from "next/link";
import { Post } from "../types/Post";
import { HiPencilAlt, HiTrash } from "react-icons/hi"; // import edit and trash icons
import { useState } from "react";
import DeletePostModal from "./DeletePostModal";
import { deletePost } from "../api/httpService";

export interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const {
    attributes: { author, title, body, createdAt, updatedAt, publishedAt },
  } = post;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    // transform the number into a string
    const postId = post.id.toString();
    deletePost(postId);
    closeModal();

    // refresh the page
    window.location.reload();
  };

  return (
    <div className="rounded-xl p-8 my-2 bg-gray-800 shadow-lg text-white space-y-4 transition-colors duration-200 hover:shadow-md">
      <div className="flex justify-between items-start">
        <Link href={`/posts/${post.id}`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl leading-none font-bold tracking-tight ">
            {title}
          </h2>
        </Link>
        <div className="flex space-x-4">
          <Link href={`/posts/edit/${post.id}`}>
            <HiPencilAlt className="text-gray-300 hover:text-gray-500 cursor-pointer w-6 h-6" />
          </Link>
          <HiTrash
            onClick={openModal}
            className="text-gray-300 hover:text-red-500 cursor-pointer w-6 h-6"
          />
        </div>
      </div>
      <p>{body && body.length > 100 ? `${body.substring(0, 100)}...` : body}</p>

      <Link href={`/posts/${post.id}`}>
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800"
        >
          Read more
        </button>
      </Link>

      <small>Categories Tag</small>

      <DeletePostModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default PostCard;
