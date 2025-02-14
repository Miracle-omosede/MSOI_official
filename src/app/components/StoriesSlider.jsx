"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const BlogDetails = [
  {
    date: "02 April 2024",
    type: "Promotional Video",
    title: "Join the Diaspora Organizations",
    thumbnail: "/slidebg1.webp",
  },
  {
    date: "12 December 2024",
    type: "2 mins read",
    title: "Remittance as a Source of Lifeline",
    thumbnail: "/slidebg2.webp",
  },
  {
    date: "12 December 2024",
    type: "2 mins read",
    title: "Roadmap for Engaging Diaspora...",
    thumbnail: "/slidebg3.webp",
  },
  {
    date: "12 December 2024",
    type: "6 mins read",
    title: "Roadmap for Engaging Diaspora...",
    thumbnail: "/slidebg4.webp",
  },
];

const StorySlider = () => {
  const [progress, setProgress] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const totalSlides = BlogDetails.length; // Fixed missing data reference

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlidesToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    setProgress((100 / totalSlides) * slidesToShow);

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [slidesToShow]); // Update progress on slidesToShow change

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1 } },
    ],
    afterChange: (current) => {
      setProgress((100 / totalSlides) * (current + 1));
    },
  };

  return (
    <div className="w-full px-5 md:px-10 lg:px-20 my-10 relative">
      <Slider {...settings} className="my-10 cursor-pointer">
        {BlogDetails.map((blog, index) => (
          <SliderCard key={index} blog={blog} />
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="h-[2px] my-5 bg-gray-300 w-[250px] absolute -top-[15px] right-[5%]">
        <div
          className="bg-light absolute h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StorySlider;
