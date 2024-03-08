"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeFavorite } from "@/app/lib/features/FavoritesSlice";
// import { isLoggedIn } from "../lib/features/AuthSlice";
import Image from "next/image";
import Link from "next/link";

export default function Favoris() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleRemoveFavorite = (item) => {
    if (item) {
      dispatch(removeFavorite(item));
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      // router.push("/favoris");
      console.log(isLoggedIn);
    } else {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <div className="">
      {isLoggedIn != true || favorites.length == 0 ? (
        <div className="py-60 w-full flex flex-col flex-wrap justify-center items-center text-center">
          <h1>Empty Favorites</h1>
          <h4 className=""> Please add some books or sign in </h4>
        </div>
      ) : (
        <div div className="grid grid-flow-row p-60 gap-10 hover:border-white">
          <div>
            {favorites != 0 && (
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 bg-opacity-80 rounded shadow"
                onClick={() => dispatch(removeAll())}
              >
                {" "}
                Clear
              </button>
            )}
          </div>
          {favorites?.map((item, id) => (
            <div
              className="grid grid-cols-2 grid-flow-row  space-x-64 bg-white bg-opacity-50 rounded p-5 shadow"
              key={id}
            >
              <div className="pb-5">
                <Image
                  src={item.image_url}
                  width={100}
                  height={100}
                  className="h-3/4 border-black shadow-2xl rounded"
                  alt="livre"
                />
                <span> Title: {item.title} </span> <br />
                <span> author: {item.authors} </span> <br />
                <Link href={`/articleDetails/${item.id}`}>
                  <button className=" bg-pink-950 text-white transition-opacity opacity-50 hover:opacity-70 font-semibold py-2 px-4 rounded shadow">
                    {/* <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"> */}
                    Summary {" -> "}
                  </button>
                </Link>
              </div>
              <div className="flex items-center">
                <button
                  className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow"
                  onClick={() => handleRemoveFavorite(item)}
                >
                  -{" "}
                </button>
                {/* <button onClick={() => handleAddFavorite(item)}> + Add to Favorites</button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
