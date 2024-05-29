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
    <div className='flex flex-col text-center items-center py-4 bg-yellow-200'>
      <h1
        className={` text-2xl font-bold ${
          animate ? "slide-in-left" : "hiddenOpacity"
        }`}>
        Mașini de închiriat Cluj-Napoca
      </h1>
      <h2
        className={`text-lg font-semibold ${
          animate ? "slide-in-right" : "hiddenOpacity"
        }`}>
        Închirieri auto la prețuri avantajoase
      </h2>
      <Link to='/mașini' className='btn mt-2 bg-gray-100'>
        Vezi prețuri
      </Link>
    </div>
  );
};

export default TitleHero;
