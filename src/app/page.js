"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import Carousel from "@/components/Carousel";
// import Allitems from "./allitems/page";
import HomePage from "./homePage/page";

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <Carousel/> */}
      <div className="py-60 flex items-center">
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
    </>
  );
}
