"use client";

import { ReactNode, useState } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export default function SliderComponent({children}: {children: ReactNode}) {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div>
      <div className="slider-container">
        <div className="controls hidden md:block text-center mb-4 md:text-end">
          <button
            onClick={sliderRef?.slickPrev}
            className="inline-block mr-3 bg-blue-600 rounded-full text-center p-1 md:p-2"
          >
            <FaChevronLeft size={15} color="#fff" />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="inline-block ml-3 bg-blue-600 rounded-full text-center p-1 md:p-2"
          >
            <FaChevronRight size={15} color="#fff" />
          </button>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}
