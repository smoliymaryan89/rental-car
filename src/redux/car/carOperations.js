import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
});

export const getAllCars = createAsyncThunk(
  "car/getAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/adverts");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCarByPage = createAsyncThunk(
  "car/getCarByPage",
  async ({ page }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=12`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
