"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/app/components/Loader";
import { Post } from "../../types/types";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/get_post/${params.id}`);
        const data = await response.json();
        setPost(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="text-center flex flex-col justify-center items-center gap-10">
          {post && (
            <div className="text-center text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
          <h2 className="text-xl font">this is post {post?.id} page</h2>
          <Image
            src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1690919064/undraw_Astronaut_re_8c33_xcls6r.png"
            width={450}
            height={200}
            alt="undraw png"
          />
        </section>
      )}
    </>
  );
}
