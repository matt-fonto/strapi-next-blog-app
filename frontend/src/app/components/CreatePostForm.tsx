"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import useAutoResize from "../utils/useAutoResize";
import { PostAttributes } from "../types/Post";
import { createPost } from "../api/httpService";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const CreatePostForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoResize(textAreaRef);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title || !author || !body) {
      return;
    }

    const newPost: PostAttributes = {
      title,
      author,
      body,
    };

    try {
      await createPost(newPost);

      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-12">
      <div className="max-w-3xl mx-auto rounded-xl bg-gray-800 p-8 space-y-8 shadow-lg">
        <Link href="/">
          <AiOutlineArrowLeft className="h-6 w-6 text-gray-500 hover:text-gray-400 duration-200" />
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-none font-bold text-white tracking-tight mb-4">
          Create post
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full p-3 rounded bg-gray-700 mt-2 mb-4"
            />
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor="author"
              className="text-sm font-medium text-gray-400"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="block w-full p-3 rounded bg-gray-700 mt-2 mb-4"
            />
          </div>

          {/* Body */}
          <div>
            <label htmlFor="body" className="text-sm font-medium text-gray-400">
              Text
            </label>
            <textarea
              ref={textAreaRef}
              id="body"
              name="body"
              value={body}
              onInput={(event) => {
                const target = event.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
              onChange={(e) => setBody(e.target.value)}
              className="block w-full p-3 rounded bg-gray-700 mt-2 mb-4 overflow-hidden transition-all"
            />
          </div>

          {/* Button */}
          <div className="flex mx-auto justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
