import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const data = await axios.get("http://localhost:8000/cars");
  return data.data;
});

export const fetchSingleCar = createAsyncThunk(
  "fetchSingleCar",
  async (carId) => {
    const data = await axios.get(`http://localhost:8000/cars/${carId}`);
    return data.data;
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    singleCar: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(fetchSingleCar.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleCar = action.payload;
      })
      .addCase(fetchSingleCar.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default carsSlice.reducer;
