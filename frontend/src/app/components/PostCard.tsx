"use client";
import Link from "next/link";
import { Post } from "../types/Post";
import { HiPencilAlt, HiTrash } from "react-icons/hi"; // import edit and trash icons
import { useState } from "react";
import { DeletePostModal } from "./DeletePostModal";
import { deletePost } from "../api/httpService";
import Button from "./Button";

interface PostCardProps {
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
    <div className="post-card-container">
      <div className="flex justify-between items-start">
        <Link href={`/posts/${post.id}`}>
          <h2 className="heading2">{title}</h2>
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

      <div>
        <Link href={`/posts/${post.id}`}>
          <Button>Read More</Button>
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <div className="small-text">Written by: {author}</div>
        <small>Categories</small>
      </div>

      <DeletePostModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
}

export { PostCard };
