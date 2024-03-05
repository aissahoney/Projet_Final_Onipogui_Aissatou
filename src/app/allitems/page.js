/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
"use client";
import { fetchData } from "../api/fetchData";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import LoadingLayout from "@/components/LoadingLayout";
// import {useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/app/lib/features/FavoritesSlice";

export default function Allitems() {
  const logged = useSelector((state) => state.auth.isAuthenticated);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  // console.log(favorites);

  const handleAddFavorite = (item) => {
    if (item) {
      dispatch(addFavorite(item));
    }
  };

  const handleRemoveFavorite = (item) => {
    if (item) {
      dispatch(removeFavorite(item));
    }
  };

  return (
    <div className="py-60">
      {" "}
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div>
          <div className="bg-beige-700 grid grid-cols-4 gap-x-10 gap-y-10 m-5 h-full">
            {data.map((item, id) => (
              <div
                key={id}
                className=" h-[60vh] flex flex-col items-center justify-center gap-y-4  bg-white bg-opacity-30 p-6 rounded"
              >
                <div>
                  <Image
                    src={item.image_url}
                    width={200}
                    height={200}
                    className="h-3/5 shadow-2xl rounded"
                    alt="livre"
                  />
                  <p> {item.title} </p>
                  <p>Author: {item.authors}</p>
                  <Link href={`/articleDetails/${item.id}`}> RESUME </Link>
                </div>
                <div>
                  {favorites?.find((favorite) => favorite?.id == item?.id) ? (
                    <button onClick={() => handleRemoveFavorite(item)}>
                      - Remove from Favorites
                    </button>
                  ) : (
                    <button onClick={() => handleAddFavorite(item)}>
                      {" "}
                      + Add to Favorites
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
