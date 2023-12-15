import Image from "next/image";
import React from "react";

interface Props {
  image: any;
}

export const GridImg = ({ image }: Props) => {
  return (
    <Image
      src={image}
      alt="/"
      className="h-auto max-w-full rounded-lg cursor-pointer"
      layout="responsive"
    />
  );
};

