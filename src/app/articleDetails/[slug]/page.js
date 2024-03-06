"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { useRouter } from "next/navigation";
import LoadingLayout from "@/components/LoadingLayout";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/app/lib/features/FavoritesSlice";

export default function Slug({ params }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  const router = useRouter();

  const newdata = data.find((element) => element.id == params.slug);

  // funtion favorite
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  // console.log(favorites);

  const handleAddFavorite = () => {
    if (newdata) {
      dispatch(addFavorite(newdata));
    }
  };

  const handleRemoveFavorite = () => {
    if (newdata) {
      dispatch(removeFavorite(newdata));
    }
  };

  return (
    <div className="p-10 min-h-screen flex flex-col py-56 ">
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div>
          <h1 className="text-4xl" onClick={() => router.push("/allitems")}>
            {/* {" "} */}
            {" <- "} Back
            {/* {" "} */}
          </h1>
          <div className="flex flex-row space-x-60 bg-white bg-opacity-60 p-10 rounded ">
            <div className="w-48 flex flex-col justify-evenly items-center text-center">
            <span> Title: {newdata?.title} </span> 
              {newdata && (
                <Image
                  src={newdata.image_url}
                  width={270}
                  height={270}
                  className="border-black shadow-2xl rounded"
                  alt="livre"
                />
              )}
              
              <span> author: {newdata?.authors} </span>
            </div>
            <div className="w-96 max-h-30">
              <h2>Resume</h2>
              <p>{newdata?.description}</p>
            </div>
          </div>
          {favorites?.find((favorite) => favorite?.id == newdata?.id) ? (
            <button
              onClick={() => handleRemoveFavorite()}
              className="flex items-center gap-0"
            >
              <Image
                src={"/heart.png"}
                width={16}
                height={16}
                alt="heartempty"
              />
              added to Favorites
            </button>
          ) : (
            <button
              onClick={() => handleAddFavorite()}
              className="flex items-center gap-0  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow"
            >
              {" "}
              <Image
                src={"/heart-shape-silhouette.png"}
                width={16}
                height={16}
                alt="heartfull"
              />
              Add to Favorites
            </button>
          )}
        </div>
      )}
    </div>
  );
}
