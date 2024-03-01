// "use client";
// import React from "react";

//bg-teal-700 ;
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar() {

  return (
    <div className="p-40 grid grid-cols-2 gap-11">
      <div className="p-10 ">
        <h1 className="text-pink-950">BOOK CHANGE YOUR LIFE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusamus animi voluptate magni repellendus incidunt temporibus
          impedit!
        </p>
        <div className="flex border border-purple-200 rounded">
          <input
            type="text"
            className="block w-full px-4 py-2 text-pink-950  bg-white border rounded-md focus:border-b-orange-900 focus:ring-pink-950 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            list="frameworks"
          />
          <button className="px-4 text-white bg-pink-950 border-l rounded " > <Link href={"/"}> 
          Search
          </Link>
          </button>
        </div>
      </div>
      <div >
        <Image src={"/hero.png"} width={350} height={400}  alt="booklogo"/>

        <div className="h-24 w-24 bg-pink-950 rounded-full absolute top-3/4 left-1/2 ">
        </div>
      </div>
    </div>
  );
}