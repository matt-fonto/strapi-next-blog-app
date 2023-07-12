import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const page = ({ params }: Props) => {
  return (
    <div>
      <h2>{params.slug}</h2>
    </div>
  );
};

export default page;
