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
    <div className="py-60">
      {" "}
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div className="bg-beige-700 grid grid-cols-4 gap-x-10 gap-y-10 m-5 h-full">
          {data.map((item, id) => (
            <Link href={`/articleDetails/${item.id}`}>
              <div
                key={id}
                className=" h-[50vh] flex flex-col items-center justify-center gap-y-4  bg-white bg-opacity-30 p-6 rounded"
              >
                <Image
                  src={item.image_url}
                  width={200}
                  height={300}
                  className="h-3/5 shadow-2xl rounded"
                  alt="livre"
                />
                <p> {item.title} </p>
                <p>Author: {item.authors}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
