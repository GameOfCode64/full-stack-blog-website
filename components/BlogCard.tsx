"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import getblogs from "@/sanity/lib/queary/getBlog";
interface BlogProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
  authorimage: string;
  blogbgimage: string;
  time: string;
  excerpt: string;
}
const BlogCard = () => {
  const [blogs, setblogs] = useState<BlogProps[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getblogs();
      setblogs(data);
    };
    fetchdata();
  }, []);
  return (
    <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:space-y-6 space-y-16">
      {blogs.map((blog) => (
        <div className="w-full h-[550px] px-6 py-4" key={blog._id}>
          <div className="w-full h-[80%]">
            <Image
              src={blog.blogbgimage}
              width={500}
              height={500}
              alt="Blog_image"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col mt-4 px-2">
            <Link href={`/blog/${blog.slug?.current}`}>
              <h1 className="text-lg font-semibold text-[#896efd]">
                {blog.title}
              </h1>
            </Link>
            <p className="text-sm text-[#333]">{blog.excerpt}</p>
            <div className="flex  items-center justify-normal gap-4 mt-2">
              <div className="w-[50px] h-[50px]">
                <Image
                  src={blog.authorimage}
                  alt="auther image"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className=" text-[#896efd] font-bold">{blog.author}</p>
                <p className="font-semibold">
                  Reading Time:{" "}
                  <span className="text-[#896efd] font-medium">
                    {blog.time} min
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
