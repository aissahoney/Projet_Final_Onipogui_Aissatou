"use client";
import SearchBar from "@/components/SearchBar";
import React from "react";
// import styles from "../../../styles/homePage.module.css";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Allitems from '../allitems/page'

export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="pl-100 pr-100 h-[40vh] bg-red-800 flex items-center justify-center">
        <Carousel
          opts={{
            gap: "1rem",
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3"> 1</CarouselItem>
            <CarouselItem className="basis-1/3">2</CarouselItem>
            <CarouselItem className="basis-1/3">3</CarouselItem>
            <CarouselItem className="basis-1/3"> 4</CarouselItem>
            <CarouselItem className="basis-1/3">5</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3"> 7</CarouselItem>
            <CarouselItem className="basis-1/3">8</CarouselItem>
            <CarouselItem className="basis-1/3">9</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className=" bg-white grid grid-cols-2 gap-5 p-8 h-[90vh] items-center">
        <div
          className="bg-contain bg-no-repeat bg-center w-full h-80 flex items-center justify-center"
          style={{ backgroundImage: `url('/shelf.png')` }}
        >
          <div className="pb-16">
            <Image
              src={"/book.jpeg"}
              className="h-3/5"
              width={135}
              height={150}
              alt={"book of the week"}
            />
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
