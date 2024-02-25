import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description }) => {
  return (
    <>
      <div className=" dark:text-white group">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-[#b58037] dark:bg-[#b58037] -translate-y-16">
          <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
          <p className="line-clamp-4  text-sm text-[#403122]">{description}</p>
          <div className="flex justify-end pr-4 text-[#403122]/20">
            <FaArrowRight className="group-hover:text-[#403122] group-hover:translate-x-2 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;