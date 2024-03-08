// "use client";
// import React from "react";

//bg-teal-700 ;
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar() {
  return (
    <div className="pb-20  pl-40 grid grid-cols-2 gap-60 md:gap-40 md:px-5 sm:grid-cols-1 sm:px-5 sm:gap-10">
      <div className=" pt-20">
        <h1 className="text-pink-950">BOOK CHANGE YOUR LIFE</h1>
        <h2 className="text-pink-950">
          Subscribe now and get a free Chapiter of a book of choice!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusamus animi voluptate magni repellendus incidunt temporibus
          impedit!
        </p>
        <div className="flex border border-purple-200 rounded">
          <input
            type="text"
            className="block w-full px-4 py-2 md:px-1 text-pink-950   bg-white border rounded focus:border-b-orange-900 focus:ring-pink-950 focus:outline-none focus:ring focus:ring-opacity-40 "
            placeholder="e-mail..."
            list="frameworks"
          />
          <button className="px-4 md:px-1 text-white bg-pink-950  transition-opacity opacity-50 hover:opacity-70 border-l rounded">
            {" "}
            <Link href={"/allitems"}>SUBSCRIBE</Link>
          </button>
        </div>
      </div>
      <div className="animate-in md:pt-20">
        <Image
          src={"/hero-2.png"}
          width={300}
          height={300}
          alt="booklogo"
          className="animate-pulse "
        />
        {/* <div className="h-20 w-20 bg-pink-950 rounded-full absolute top-4/5 left-1/2"></div> */}
      </div>
    </div>
  );
}
