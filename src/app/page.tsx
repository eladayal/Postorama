"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import WelcomeHeadline from "./components/HomePage/WelcomeHeadline";
import Loader from "./components/Loader";
import { Post } from "./types/types";

export default function Home() {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/get_hp_data");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {data && <WelcomeHeadline data={data} />}
          <Image
            src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1690920822/undraw_Taken_re_yn20_whazbs.png"
            width={460}
            height={200}
            alt="undraw png"
          />
        </div>
      )}
    </>
  );
}
