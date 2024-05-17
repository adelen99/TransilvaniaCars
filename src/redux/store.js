import { configureStore } from "@reduxjs/toolkit";
import carsReducer, { fetchSingleCar } from "./carsSlicer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export { fetchSingleCar };
