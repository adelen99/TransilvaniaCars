import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const CarsForHomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carsPerPage, setCarsPerPage] = useState(3);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("featured", true);

      if (error) {
        console.error(error);
      } else {
        setCars(data);
      }
      setLoading(false);
    };

    fetchFeaturedCars();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCarsPerPage(1);
      } else if (window.innerWidth < 768) {
        setCarsPerPage(2);
      } else {
        setCarsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col justify-center'>
        <h1 className='pt-4 text-center text-2xl font-bold'>
          Mașinile noastre
        </h1>
        <p className='text-start p-4 text-md lg:px-72'>
          Cu Transilvania Cars, închirierea unei mașini devine o experiență fără
          griji. Procesul este simplu și eficient, iar noi suntem aici pentru
          a-ți oferi suportul necesar. Oferim o gamă variată de mașini, de la
          compacte la modele economice și premium, astfel încât să găsești
          întotdeauna ce ai nevoie pentru călătoria ta.
        </p>
      </div>
      <div className='relative '>
        <div
          className={`flex grid-cols-${carsPerPage} gap-8 justify-center p-4 `}>
          {cars.slice(0, carsPerPage).map((car) => (
            <div
              key={car.id}
              className='bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center'>
              <img src={car.img} alt={car.name} />
              <h2 className='text-md  font-bold'>{car.name}</h2>
              <p className='font-semibold'>An: {car.year}</p>
              <p className='font-semibold'>
                Cutie de viteze: {car.transmission}
              </p>
              <p className='font-semibold'>Preț: {car.price}</p>
              <Link
                to={`/mașini/${car.id}`}
                className='btn hover:bg-yellow-200 mt-2 border-none font-semibold'>
                Vizualizați
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsForHomePage;
