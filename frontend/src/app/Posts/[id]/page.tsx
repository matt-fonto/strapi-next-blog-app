import { getPostById } from "@/app/api/httpService";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-md font-light text-white">{body}</p>
      </div>
    </div>
  );
};

export default page;
