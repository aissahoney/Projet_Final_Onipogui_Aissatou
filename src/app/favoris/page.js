"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/app/lib/features/FavoritesSlice";
import Image from "next/image";

export default function Favoris() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

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
    <div className="grid grid-flow-row p-60 gap-10">
      {favorites?.map((item, id) => (
        <div
          className="grid grid-cols-3 bg-white bg-opacity-60 rounded p-10 "
          key={id}
        >
          <div>
            <p>{item?.title}</p>
            <Image
              src={item.image_url}
              width={150}
              height={150}
              className="border-black shadow-2xl rounded"
              alt="livre"
            />
          </div>

          <div>
            <span> Title: {item.title} </span> <br />
            <span> author: {item.authors} </span>
          </div>
          <div>
            <button onClick={() => handleRemoveFavorite(item)}>
              - Remove from Favorites{" "}
            </button>
            {/* <button onClick={() => handleAddFavorite(item)}> + Add to Favorites</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
