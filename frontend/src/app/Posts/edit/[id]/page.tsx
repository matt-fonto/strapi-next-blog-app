import { getPostById } from "@/app/api/httpService";
import { EditPostForm } from "@/app/components/EditPostForm";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditPostPage({ params }: Props) {
  const post = await getPostById(params.id);

  return <EditPostForm post={post} />;
}
