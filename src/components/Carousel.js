import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className='carousel w-full'>
        <div
          id='item1'
          className={`carousel-item w-full ${
            currentImage === 1 ? "block" : "hidden"
          }`}>
          <img
            src='https://yetrkwbxweagaibutsoh.supabase.co/storage/v1/object/public/cars/carouselSlide1.jpeg'
            alt='img1'
            className='w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[500px]'
          />
        </div>
        <div
          id='item2'
          className={`carousel-item w-full ${
            currentImage === 2 ? "block" : "hidden"
          }`}>
          <img
            src='https://yetrkwbxweagaibutsoh.supabase.co/storage/v1/object/public/cars/carouselSlide2.jpeg'
            alt='img2'
            className='w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[500px]'
          />
        </div>
        <div
          id='item3'
          className={`carousel-item w-full ${
            currentImage === 3 ? "block" : "hidden"
          }`}>
          <img
            src='https://yetrkwbxweagaibutsoh.supabase.co/storage/v1/object/public/cars/carouselSlide3.jpeg'
            alt='img3'
            className='w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[500px]'
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
