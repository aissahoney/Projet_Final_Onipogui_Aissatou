/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
"use client";
import { fetchData } from "../api/fetchData";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import LoadingLayout from "@/components/LoadingLayout";


export default function Allitems() {
  const logged = useSelector((state) => state.auth.isAuthenticated);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  return (
    <>  {isLoading? <LoadingLayout/>  :  <div className="bg-beige-700 grid grid-cols-3 gap-x-5 gap-y-10 py-60 h-[100vh]">
    {data.map((item, id) => (
      <Link href={`/articleDetails/${item.id}`}>
        <div
          key={id}
          className="border-grey border-solid border-2 h-[40vh] flex flex-col items-center justify-center gap-y-4"
        >
          <Image
            src={item.image_url}
            width={200}
            height={300}
            className="h-4/5"
          />
          <p> {item.title} </p>
        </div>
      </Link>
    ))}
  </div>}
    </>
  );
}
