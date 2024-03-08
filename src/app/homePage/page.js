"use client";
import { fetchData } from "../api/fetchData";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
// import styles from "../../../styles/homePage.module.css";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpenText, BadgeCheck, Hourglass, Trophy } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [carouselRandom, setCarouselRandom] = useState([]);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);
  useEffect(() => {
    const carouselRandom = data?.sort(() => 0.5 - Math.random()).slice(0, 5);
    setCarouselRandom(carouselRandom);
  }, [data]);
  console.log(carouselRandom);
  return (
    <div>
      <SearchBar />
      <div className=" h-[80vh] bg-white flex items-center justify-center md:hidden sm:hidden">
        <Carousel
          opts={{
            gap: "1rem",
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent width={100} className="">
            {carouselRandom.map((item, index) => (
              <div key={index} className="h-[60vh] items-center flex ">
                <CarouselItem className="">
                  <Link href={`/articleDetails/${item.id}`}>
                    <div className=" items-center  max-w-xs transition  duration-500 ease-in-out hover:scale-105 ">
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
                </CarouselItem>
              </div>
            ))}

            {/* <CarouselItem className="">2</CarouselItem>
            <CarouselItem className="">3</CarouselItem>
            <CarouselItem className=""> 4</CarouselItem>
            <CarouselItem className="">5</CarouselItem>
            <CarouselItem className="">6</CarouselItem>
            <CarouselItem className=""> 7</CarouselItem>
            <CarouselItem className="">8</CarouselItem>
            <CarouselItem className="">9</CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className=" grid grid-cols-2 gap-5 p-8 h-[90vh] items-center md:bg-white sm:bg-white sm:grid-cols-1 sm:h-[100vh] sm:py-20">
        <div
          className="bg-contain bg-no-repeat bg-center w-full h-80 sm:h-100  sm:py-0 flex items-center justify-center rounded"
          style={{ backgroundImage: `url('/shelf.png')` }}
        >
          <div className="pb-16 md:pb-20">
       
            <Image
              src={"/book.jpeg"}
              className="h-2/6 "
              width={120}
              height={120}
              alt={"book of the week"}
            />
          </div>
        </div>
        <div className="p-8 sm:p-20">
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

      <div className="min-h-[80vh] bg-white w-full flex flex-col gap-28 items-center text-center space-x-10 p-16 md:pb-32 sm:bg-transparent md:bg-transparent ">
        <div className="">
          <h4>AWESOME STATS</h4>
          <h1 className="text-pink-950">ALL MILESTONES ACHIEVED</h1>
          {/* <div className="border-pink-950 border-solid border-2"></div> */}
        </div>

        <div className=" text-white grid grid-cols-4  md:grid-cols-2 gap-x-28  md:gap-y-10 h-[40vh]  ">
          <div className="bg-pink-950 hover:animate-pulse h-52 w-52">
            <BadgeCheck color="white" size={48} />
            <h2>35</h2>
            <h3>Achievements</h3>
          </div>
          <div className="bg-pink-950 hover:animate-pulse h-52 w-52">
            <BookOpenText color="white" size={48} />
            <h2>9999</h2>
            <h3>Active Readers</h3>
          </div>
          <div className="bg-pink-950 hover:animate-pulse h-52 w-52">
            <Hourglass color="white" size={48} />
            <h2>41</h2>
            <h3>Writing Hours</h3>
          </div>
          <div className="bg-pink-950 hover:animate-pulse h-52 w-52 ">
            <Trophy color="white" size={48} />
            <h2>20</h2>
            <h3>Awards</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
