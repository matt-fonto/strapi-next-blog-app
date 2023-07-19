"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import useAutoResize from "../utils/useAutoResize";
import { PostAttributes } from "../types/Post";
import { createPost } from "../api/httpService";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Button from "./Button";

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
    <div className="form-container-parent">
      <div className="form-container">
        <Link href="/">
          <AiOutlineArrowLeft className="h-6 w-6 text-gray-500 hover:text-gray-400 duration-200" />
        </Link>

        <h1 className="heading1">Create post</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label htmlFor="title" className="label-forms">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-forms"
            />
          </div>

          {/* Author */}
          <div>
            <label htmlFor="author" className="label-forms">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input-forms"
            />
          </div>

          {/* Body */}
          <div>
            <label htmlFor="body" className="label-forms">
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
              className="input-forms overflow-hidden transition-all"
            />
          </div>

          {/* Button */}
          <div className="flex mx-auto justify-end">
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
