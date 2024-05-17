import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TitleHero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col items-center py-4 bg-yellow-200'>
      <h1
        className={`text-3xl font-bold ${
          animate ? "slide-in-left" : "hiddenOpacity"
        }`}>
        Masini de inchiriat Cluj-Napoca
      </h1>
      <h2
        className={`text-xl font-semibold ${
          animate ? "slide-in-right" : "hiddenOpacity"
        }`}>
        Inchirieri auto la preturi avantajoase
      </h2>
      <Link to='/products' className='btn mt-2 bg-gray-100'>
        Vezi preturi
      </Link>
    </div>
  );
};

export default TitleHero;
