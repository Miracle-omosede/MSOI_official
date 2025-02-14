import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const SliderCard = ({ blog }) => {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto bg-light">
      {/* Image */}
      <div className="relative group overflow-hidden rounded-lg ">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={300}
          height={200}
          className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Play Button */}
        <div className="absolute bottom-5 left-5 z-10 flex items-center justify-center">
          <div className="w-[4rem] h-[4rem] rounded-full bg-white/85 flex items-center justify-center">
            <div className="w-[3rem] h-[3rem] rounded-full border-2 border-green-500 flex items-center justify-center">
              <Play className="stroke-green-500" />
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/30"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col p-5 gap-2 bg-light shadow-lg">
        <span className="uppercase text-[10px] text-white/60 tracking-[.1rem]">
          {blog.date} | {blog.type}
        </span>
        <span className="capitalize text-[14px] text-white font-dm-sans font-semibold">
          {blog.title}
        </span>
      </div>
    </div>
  );
};

export default SliderCard;
