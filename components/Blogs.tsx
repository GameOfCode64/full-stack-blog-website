import React from "react";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
  return (
    <div className="mt-8 lg:px-20 md:px-12 px-4">
      <h1 className="text-3xl font-bold relative text-[#896efd] heading">
        Our Latest Blogs
      </h1>
      <BlogCard />
    </div>
  );
};

export default Blogs;
