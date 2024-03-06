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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  // Redux Favoris
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

  // Filter Function
  const [search, setSearch] = useState("");
  const [filterFormat, setFilterFormat] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  // const allGenres = [...new Set(data.map(item => item.genres))];
  const allFormat = [...new Set(data.map((item) => item.format))];

  const searchFilter = data?.filter(
    (item) =>
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        search.trim() === "") &&
      (filterGenre === "" ||
        item.genre.toLowerCase() === filterGenre.toLowerCase()) &&
      (filterFormat === "" || item.format === filterFormat)
  );

  return (
    <div className="py-60">
      {" "}
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div>
          {/* Barre de recherche */}
          <div className="w-full flex flex-row justify-center items-center text-center space-x-10">
            <label htmlFor="">
              <select
                name=""
                id="dropDown"
                onChange={(e) => setFilterFormat(e.target.value)}
              >
                <option value="" disabled selected hidden className="filter">
                  All
                </option>
                {allFormat.map((platform, index) => (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </label>

            <div className="searchBar">
              <input
                type="search"
                placeholder="recherche"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* <label htmlFor="" className=''>
              <select name="" id="dropDown" onChange={(e) => setFilterGenre(e.target.value)}>
                <option value="" disabled selected hidden className='filter'>Genre</option>
                {allGenres.map((genre, index) => (
                  <option key={index} value={genre}>{genre}</option>
                ))}
              </select>
            </label> */}
          </div>

          {/* Map Livres */}
          <div className="bg-beige-700 grid grid-cols-4 gap-x-10 gap-y-10 m-5 h-full">
            {searchFilter.map((item, id) => (
              <div
                key={id}
                className=" h-[60vh] flex flex-col items-center justify-center gap-y-4  bg-white bg-opacity-30 p-6 rounded   relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
              >
                <Link href={`/articleDetails/${item.id}`}>
                  <div className="max-w-xs transition duration-500 ease-in-out hover:scale-110">
                    <Image
                      src={item.image_url}
                      width={160}
                      height={160}
                      className="shadow-2xl rounded"
                      alt="livre"
                    />
                    <p> {item.title} </p>
                    <p>Author: {item.authors}</p>
                  </div>
                </Link>
                <div>
                  {favorites?.find((favorite) => favorite?.id == item?.id) ? (
                    <button
                      onClick={() => handleRemoveFavorite(item)}
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
                      onClick={() => handleAddFavorite(item)}
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
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
