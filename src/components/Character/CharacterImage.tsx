import Image from "next/image";
import React from "react";

interface Props {
  socialImg: any;
  name: string;
}

export const CharacterImage = ({ socialImg, name }: Props) => {
  return (
    <div className="relative ring-1 ring-slate-900/5 shadow-xl rounded-lg dark:bg-slate-800 cursor-pointer">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 font-bold hidden group-hover:block">
          {name}
        </p>
      </div>
    </div>
  );
};
