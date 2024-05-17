import React from "react";
import Carousel from "../components/Carousel";
import TitleHero from "../components/TitleHero";
import Description from "../components/Description";
import CarsForHomePage from "../components/CarsForHomePage";

const Home = () => {
  return (
    <>
      <TitleHero />
      <Carousel />
      <Description />
      <CarsForHomePage />
    </>
  );
};

export default Home;
