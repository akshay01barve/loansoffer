"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";

const Carousels = () => {
  const images = [
    "./banner1.png",
    "./banner2.png",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80"
  ];

  return (
    <div className="p-3">
      <Carousel autoplay loop="true" autoplayDelay={3000}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image ${index + 1}`}
          className="h-[320px] w-full"
        />
      ))}
    </Carousel>
    </div>
  );
};

export default Carousels;
