"use client";
import { useState, useEffect } from "react";
import { Post } from "../types/types";
import Loader from "../components/Loader";
export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-center text-5xl font-bold">Posts</h1>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {posts?.map((post: Post, index: any) => (
          <a
            key={index}
            href={`/posts/${post.id}`}
            className="block max-w-sm p-6 border drop-shadow-xl rounded-lg  bg-[#4796cd] border-gray-200 hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white">{post.title}</h5>
            <p className="font-normal text-center text-white">Click to review the post</p>
          </a>
        ))}
      </div>
    </div>
  );
}
