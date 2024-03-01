"use client";
import SearchBar from "@/components/SearchBar";
import React from "react";
import styles from "../../../styles/homePage.module.css";
import Image from "next/image";
// import Allitems from '../allitems/page'

export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className=" bg-white grid grid-cols-2 gap-5 p-8">
        <div
          className="bg-contain bg-no-repeat bg-center w-full h-80 flex items-center justify-center"
          style={{ backgroundImage: `url('/shelf.png')` }}
        >
          <div className="pb-16">
            <Image src={"/2.png"} width={200} height={300} />
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-pink-950">BEST OF THE WEEK</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam rem ullam
            quasi, aliquid maiores natus necessitatibus blanditiis, adipisci
            excepturi quibusdam in qui velit doloremque ea laudantium, fugit vel
            expedita voluptates{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
