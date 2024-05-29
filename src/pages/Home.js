import React from "react";
import {
  Carousel,
  TitleHero,
  Description,
  Description2,
  ConditionsForRent,
  CarsForHomePage,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className='min-h-screen'>
      <TitleHero />
      <Carousel />
      <Description />
      <Description2 />
      <ConditionsForRent />
      <CarsForHomePage />
      <Footer />
    </div>
  );
};

export default Home;
