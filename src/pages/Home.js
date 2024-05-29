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
    <>
      <TitleHero />
      <Carousel />
      <Description />
      <Description2 />
      <ConditionsForRent />
      <CarsForHomePage />
      <Footer />
    </>
  );
};

export default Home;
