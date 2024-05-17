import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCar } from "../redux/carsSlicer";
import { useParams } from "react-router";
const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleCar, isLoading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchSingleCar(id));
  }, [dispatch, id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!singleCar) return <div>Car not found</div>;
  console.log(singleCar);

  return (
    <div>
      <h2>{singleCar.name}</h2>
      <p>{singleCar.brand}</p>
      <p>{singleCar.year}</p>
    </div>
  );
};

export default SingleProduct;
