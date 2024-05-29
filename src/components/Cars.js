import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [transmission, setTransmission] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("cars").select("*");

      if (error) {
        console.error("Error fetching cars:", error);
      } else {
        setCars(data);
      }
      setLoading(false);
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (brand === "" || car.brand.toLowerCase() === brand.toLowerCase()) &&
      (transmission === "" ||
        car.transmission.toLowerCase() === transmission.toLowerCase()) &&
      (year === "" || car.year.toString() === year)
    );
  });

  const resetFilters = () => {
    setSearch("");
    setBrand("");
    setTransmission("");
    setYear("");
  };

  if (loading) {
    return <div>Încărcare...</div>;
  }
  const uniqueBrands = [
    ...Array.from(new Set(cars.map((car) => car.brand.toLowerCase()))).map(
      (brand) => brand.charAt(0).toUpperCase() + brand.slice(1)
    ),
  ];

  const uniqueTransmission = [
    ...Array.from(new Set(cars.map((car) => car.transmission))),
  ];

  const uniqueYears = [
    ...Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => a - b),
  ];

  return (
    <div>
      <div className='mt-10 flex gap-8 flex-wrap items-center justify-center '>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Căutare'
          className='input input-bordered mb-4'
        />
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className='select select-bordered mb-4'>
          <option value=''>Alege un brand</option>
          {uniqueBrands.map((brandOption) => (
            <option key={brandOption} value={brandOption}>
              {brandOption}
            </option>
          ))}
        </select>
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          className='select select-bordered mb-4'>
          <option value=''>Alege o transmisie</option>
          {uniqueTransmission.map((transmissionOption) => (
            <option key={transmissionOption} value={transmissionOption}>
              {transmissionOption}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className='select select-bordered mb-4'>
          <option value=''>Alege un an</option>
          {uniqueYears.map((yearOption) => (
            <option key={yearOption} value={yearOption.toString()}>
              {yearOption}
            </option>
          ))}
        </select>
        <button
          className='btn mb-4 hover:bg-yellow-200 border-none'
          onClick={resetFilters}>
          Reseteaza filterele
        </button>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {filteredCars.map((car) => {
          return (
            <div
              key={car.id}
              className='card  bg-base-100 shadow-xl  m-auto p-4 my-10 overflow-hidden transition-transform transform-gpu hover:scale-105 cursor-pointer'>
              <figure className='overflow-hidden'>
                <img src={car.img} alt={car.name} />
              </figure>
              <div className='card-body'>
                <h2 className='card-title '>{car.name}</h2>
                <p className='font-semibold capitalize'>Brand: {car.brand}</p>
                <p className='font-semibold'>An: {car.year}</p>
                <p className='font-semibold'>Preț: {car.price}</p>
                <p className='font-semibold'>Număr de locuri: {car.locuri}</p>
                <div className='card-actions justify-end'>
                  <Link
                    to={`/cars/${car.id}`}
                    className='btn hover:bg-yellow-200 border-none'>
                    Vizualizați
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
