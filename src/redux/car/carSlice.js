import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarByPage } from "./carOperations";
import { handleFulfilled, handlePending, handleRejected } from "../handlers";

const initialState = {
  cars: {
    items: [],
    allCars: [],
    favoriteCars: [],
    isLoading: false,
    error: null,
  },

  filter: {
    carBrand: "",
    price: "",
    from: "",
    to: "",
  },
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    getFavorites(state) {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        state.cars.favoriteCars = JSON.parse(storedFavorites);
      }
    },
    toggleFavorites(state, { payload }) {
      const favoriteCar = state.cars.allCars.find(({ id }) => id === payload);

      if (!favoriteCar) {
        return;
      }

      const isExist = state.cars.favoriteCars.findIndex(
        ({ id }) => id === favoriteCar.id
      );

      if (isExist === -1) {
        state.cars.favoriteCars.push(favoriteCar);
      } else {
        state.cars.favoriteCars.splice(isExist, 1);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.cars.favoriteCars)
      );
    },
    setFilter(state, { payload }) {
      state.filter = payload;
      state.cars.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarByPage.fulfilled, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.cars.items = action.payload;
        } else {
          state.cars.items.push(...action.payload);
        }

        handleFulfilled(state);
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars.allCars = payload;
      })
      .addCase(getCarByPage.pending, handlePending)
      .addCase(getCarByPage.rejected, handleRejected);
  },
});

export const { getFavorites, toggleFavorites, setFilter } = carSlice.actions;
export const carReducer = carSlice.reducer;
