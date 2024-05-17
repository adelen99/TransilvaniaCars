import React, { useState, useEffect } from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current image, reset to 1 after reaching 4
      setCurrentImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Run this effect only once after component mounts

  return (
    <>
      <div className='carousel w-full'>
        <div
          id='item1'
          className={`carousel-item w-full ${
            currentImage === 1 ? "block" : "hidden"
          }`}>
          <img src={img1} alt='img1' className='w-full h-[400px]' />
        </div>
        <div
          id='item2'
          className={`carousel-item w-full ${
            currentImage === 2 ? "block" : "hidden"
          }`}>
          <img src={img2} alt='img2' className='w-full h-[400px]' />
        </div>
        <div
          id='item3'
          className={`carousel-item w-full ${
            currentImage === 3 ? "block" : "hidden"
          }`}>
          <img src={img1} alt='img3' className='w-full h-[400px]' />
        </div>
        <div
          id='item4'
          className={`carousel-item w-full ${
            currentImage === 4 ? "block" : "hidden"
          }`}>
          <img src={img2} alt='img4' className='w-full h-[400px]' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </>
  );
};

export default Carousel;
