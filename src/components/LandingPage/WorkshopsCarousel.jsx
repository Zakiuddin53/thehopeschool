"use client";
import React, { useRef } from "react";
import Image from "next/image";

const WorkshopsCarousel = () => {
  const workshops = [
    "Art & Craft",
    "Science Explorers",
    "Storytelling & Drama",
    "Fun with Math Games",
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mb-16 scroll-hide">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Workshops and Training
      </h2>

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-7 overflow-hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide"
        >
          {workshops.map((workshop, index) => (
            <div key={workshop} className="flex-shrink-0 w-full px-4">
              <div className="border rounded-lg overflow-hidden shadow-md bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src={`/assets/images/workshops/${index + 1}.jpg`}
                    alt={workshop}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{workshop}</h3>
                  <p>Description of the {workshop} workshop...</p>
                  <p className="mt-2 text-gray-600">Date: TBD</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 border border-gray-300 p-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border border-gray-300 p-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default WorkshopsCarousel;
