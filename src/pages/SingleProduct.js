import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { Footer } from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleCar, setSingleCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("cars")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setSingleCar(data);
        }
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20'></div>
      </div>
    );
  }

  if (!singleCar) {
    return <div>Car not found</div>;
  }

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <div className='card mx-auto bg-base-100 shadow-xl p-6 lg:w-1/2'>
          <figure>
            <img src={singleCar.img} alt='img' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-xl'>
              {singleCar.name}
              <div className='badge badge-secondary bg-yellow-200 border-none'>
                {singleCar.brand.toUpperCase()}
              </div>
            </h2>
            <p className='text-gray-600 mt-2 mb-4'>{singleCar.description}</p>
            <div className='card-actions grid grid-cols-1 font-semibold'>
              <div className='badge badge-outline font-mono bg-yellow-200 border-none'>
                An: {singleCar.year}
              </div>
              <div className='badge badge-outline font-mono bg-yellow-200 border-none'>
                Transmisie: {singleCar.transmission}
              </div>
              <div className='badge badge-outline font-mono bg-yellow-200 border-none'>
                Număr locuri: {singleCar.locuri}
              </div>
              <div className='badge badge-outline font-mono bg-yellow-200 border-none capitalize'>
                Carburant: {singleCar.carburant}
              </div>
              {singleCar.price !== "Variabil" && (
                <div className='badge badge-outline font-mono bg-yellow-200 border-none'>
                  Preț: {singleCar.price}
                </div>
              )}
            </div>
            {singleCar.price === "Variabil" && (
              <div className='font-semibold text-sm'>
                <div className='rounded-xl p-2 inline-block bg-yellow-200 '>
                  <p>
                    Prețul variază în funcție de perioada de închiriere și
                    distanța parcursă.
                  </p>
                </div>
                <div className='rounded-xl p-2 mt-2 inline-block bg-yellow-200'>
                  <p>Există opțiunea de a se închiria cu tot cu șofer.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
