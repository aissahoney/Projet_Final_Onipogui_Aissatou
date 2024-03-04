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
    <div className="p-10 min-h-screen flex flex-col py-60 ">
    {isLoading ?  <LoadingLayout />:
    <div>
      <h1 className="text-4xl" onClick={() => router.push("/")}>
        {/* {" "} */}
         {" <- "} Back
        {/* {" "} */}
      </h1>
      <div className="flex flex-row space-x-60 bg-white bg-opacity-60 p-12 rounded ">
        <div className="w-50">
          {newdata && (
            <Image
              src={newdata.image_url}
              width={300}
              height={300}
              className="border-black shadow-2xl rounded"
              alt="livre"
            />
          )}
          <span> Title: {newdata?.title} </span> <br />
          <span> author: {newdata?.authors} </span>
        </div>
        <div className="w-96 max-h-30">
          <h2>Resume</h2>
          <p>{newdata?.description}</p>
        </div>
      </div>
      {favorites?.find((favorite) => favorite?.id == newdata?.id) ? (
        <button onClick={() => handleRemoveFavorite()}>
          - Remove from Favorites
        </button>
      ) : (
        <button onClick={() => handleAddFavorite()}> + Add to Favorites</button>
      )}

</div> }

       <div>
        {favorites?.map((item, id) => (
          <div key={id}>{item?.title}</div>
        ))}
      </div> 
    </div>
  );
}
