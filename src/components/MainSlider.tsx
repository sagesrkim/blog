"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key, useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css"; // Swiper v6 이상의 경우

type Image = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function MainSlider() {
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();
  // const [images, setImages] = useState<Image[]>([]);
  const breakpoints = {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  const images = require("../../public/data/image.json");

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/image.ts");
  //     const data = await res.json();
  //     setImages(data);
  //   }
  //   fetchData();
  //   console.log(images);
  // }, []);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      // pagination={{ clickable: true }}
      navigation
      breakpoints={breakpoints}
      className="w-80 h-64"
    >
      {images?.map(
        (image: {
          id: Key | null | undefined;
          imgUrl: string | StaticImport;
          title: string;
        }) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.imgUrl}
              alt={image.title}
              width={400}
              height={300}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
