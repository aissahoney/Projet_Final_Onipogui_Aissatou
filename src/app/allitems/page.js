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
  const genres = [
    "Young Adult",
    "Fiction",
    "Humor",
    "Science Fiction",
    "Dystopia",
    "Fantasy",
    "Historical",
    "Classics",
    "Academic",
    "Horror",
    "Thriller",
    "Mystery",
    "Crime",
    "Romance",
    "Paranormal",
    "Animals",
    "School",
    "Biography",
    "Mythology",
    "Memoir",
    "Religion",
    "Christian",
    "Poetry",
    "Childrens",
    "Cultural",
    "Literature",
    "Philosophy",
    "Plays",
    "Spirituality",
    "Adventure",
    "Erotica",
    "Contemporary",
    "Novels",
    "Health",
    "Christmas",
  ];

  // const allGenres = [...new Set(genre.map(item => item.genres))];
  const allFormat = [...new Set(data.map((item) => item.format))];

  const searchFilter = data?.filter(
    (item) =>
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        search.trim() === "") &&
      (filterFormat === "" || item.format === filterFormat) &&
      (filterGenre === "" || item.genres.includes(filterGenre))
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
            {/* optionBar */}
            <label htmlFor="">
              <select
                className="px-4 text-white bg-pink-950  transition-opacity opacity-50 hover:opacity-70 border-l rounded  block w-full  py-2 focus:border-b-orange-900 focus:ring-pink-950 focus:outline-none focus:ring focus:ring-opacity-40"
                name=""
                id="dropDown"
                onChange={(e) => setFilterFormat(e.target.value)}
              >
                <option value="" selected className="filter">
                  All Format
                </option>
                {allFormat.map((platform, index) => (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="" className="">
              <select
                className="px-4 text-white bg-pink-950 transition-opacity opacity-50 hover:opacity-70 border-l rounded  block w-full  py-2 focus:border-b-orange-900 focus:ring-pink-950 focus:outline-none focus:ring focus:ring-opacity-40"
                name=""
                id="dropDown"
                onChange={(e) => setFilterGenre(e.target.value)}
              >
                <option value="" selected className="filter">
                  Genre
                </option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </label>
            {/* searchBar */}
            <div className="searchBar">
              <input
                type="search"
                className="block w-full px-4 py-2 text-pink-950  bg-white border rounded focus:border-b-orange-900 focus:ring-pink-950 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="type your search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Map Livres */}
          <div className="bg-beige-700 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-10 m-5 h-full">
            {searchFilter.map((item, id) => (
              <div
                key={id}
                className=" h-[50vh] flex flex-col items-center justify-center gap-y-4  bg-white bg-opacity-30 p-8 rounded   relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
              >
                <Link href={`/articleDetails/${item.id}`}>
                  <div className=" items-center justify-center  max-w-xs transition  duration-500 ease-in-out hover:scale-105">
                    <Image
                      src={item.image_url}
                      width={160}
                      height={160}
                      className="shadow-2xl rounded"
                      alt="livre"
                    />
                  </div>
                  <p> {item.title} </p>
                  <p>Author: {item.authors}</p>
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
                      added
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddFavorite(item)}
                      className="flex items-center gap-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow opacity-70"
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
