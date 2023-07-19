import { getPostById } from "@/app/api/httpService";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";

interface Props {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostById(params.id);

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
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-12">
      <div className="max-w-3xl mx-auto rounded-xl bg-gray-800 p-8 space-y-8 shadow-lg">
        <Link href="/">
          <AiOutlineArrowLeft className="hover:text-gray-400 duration-200" />
        </Link>

        <div className="flex justify-between items-center">
          <h1 className="heading1">{title}</h1>

          <Link href={`/posts/edit/${post.id}`}>
            <HiPencilAlt className="text-gray-300 hover:text-gray-500 cursor-pointer w-6 h-6" />
          </Link>
        </div>
        <p className="text-lg sm:text-md font-light text-white">{body}</p>

        <div>
          <p className="small-text">Written by {author}</p>
        </div>
      </div>
    </div>
  );
}
