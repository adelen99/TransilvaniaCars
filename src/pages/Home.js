import React from "react";
import Carousel from "../components/Carousel";
import TitleHero from "../components/TitleHero";
import Description from "../components/Description";
import CarsForHomePage from "../components/CarsForHomePage";
import ConditionsForRent from "../components/ConditionsForRent";
import Footer from "../components/Footer";
import Description2 from "../components/Description2";

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
