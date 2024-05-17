import React, { useEffect, useState } from "react";
import { cars } from "../utils/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carsSlicer";
import { Link } from "react-router-dom";

const CarsForHomePage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const carsPerPage = 3;

  const handlePrevPage = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  // console.log(data.data);

  const handleNextPage = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, cars.length - carsPerPage)
    );
  };

  return (
    <>
      <div className='bg-gray-100'>
        <div className='flex flex-col justify-center'>
          <h1 className='py-8 text-center text-3xl font-bold'>
            Masinile noastre
          </h1>
          <p className='text-center px-48'>
            Cu Transilvania Cars, închirierea unei mașini devine o experiență
            fără griji. Procesul este simplu și eficient, iar noi suntem aici
            pentru a-ți oferi suportul necesar. Oferim o gamă variată de mașini,
            de la compacte la modele economice și premium, astfel încât să
            găsești întotdeauna ce ai nevoie pentru călătoria ta.
          </p>
        </div>
        <div className='relative'>
          <div className='grid grid-cols-3 gap-4 justify-center p-4'>
            {data &&
              data.data &&
              data.data
                .slice(startIndex, startIndex + carsPerPage)
                .map((car) => {
                  return (
                    <div
                      key={car.id}
                      className='bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center'>
                      <img src={car.img} alt={car.name} />
                      <h2 className='text-lg font-semibold'>{car.name}</h2>
                      <p>An: {car.year}</p>
                      <p>Cutie de viteze: {car.transmission}</p>
                      <p>Preț: {car.price} $/zi</p>
                      <Link to={`/products/${car.id}`} className='btn'>
                        Vizualizati
                      </Link>
                    </div>
                  );
                })}
          </div>
          <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full'>
            <button
              onClick={handlePrevPage}
              disabled={startIndex === 0}
              className='btn'>
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextPage}
              disabled={startIndex >= cars.length - carsPerPage}
              className='btn'>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsForHomePage;
