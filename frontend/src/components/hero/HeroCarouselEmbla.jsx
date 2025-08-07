import "./EmblaCarousel.css";

import React, { useCallback } from "react";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Fade from "embla-carousel-fade";
import { HERO_DATA } from "@/lib/utilities/heroData.js";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
    Fade(),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container">
        {HERO_DATA.map((slide) => (
          <div
            key={slide.id}
            className="embla__slide 
            flex flex-col items-center justify-center relative"
          >
            <img
              src={slide.image}
              alt="Product icon"
              className="w-[80%] h-auto md:w-auto md:max-h-[500px]"
            />

            <div className="absolute bottom-0 right-0 my-3">
              <span
                className="before:block before:absolute before:-inset-1 mx-2
                  before:-skew-y-4 before:bg-red-700 relative inline-block 
                  px-2 lg:p-3"
              >
                <span
                  className="relative text-white dark:text-brandDarkGray 
                  font-rusHand font-bold 
                  text-lg 2xsm:text-xl xsm:text-2xl sm:text-3xl md:text-4xl 
                  lg:text-5xl xl:text-6xl 2xl:text-7xl"
                >
                  {slide.price} ₽
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute bottom-[50%] left-0" onClick={scrollPrev}>
        <ChevronLeft size={50} className="stroke-primaryBase" />
      </button>
      <button className="absolute bottom-[50%] right-0" onClick={scrollNext}>
        <ChevronRight size={50} className="stroke-primaryBase" />
      </button>
    </div>
  );
}
