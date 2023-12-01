import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars.items;

export const selectFavorite = (state) => state.cars.cars.favoriteCars;

export const selectIsLoading = (state) => state.cars.cars.isLoading;

export const selectFilter = (state) => state.cars.filter;

export const selectAllCars = (state) => state.cars.cars.allCars;

export const selectFilteredCars = createSelector(
  [selectCars, selectAllCars, selectFilter],
  (cars, allCars, filter) => {
    const { carBrand, price, from, to } = filter;

    if (!carBrand && !price && !from && !to) {
      return cars;
    }

    const filteredCars = allCars.filter((car) => {
      const filteredBrand = !carBrand || car.make.toLowerCase() === carBrand;

      const filteredPrice =
        !price || Number(car.rentalPrice.replace("$", "")) <= Number(price);

      const filteredMileage =
        (!from.trim() || car.mileage >= from) &&
        (!to.trim() || car.mileage <= to);

      return filteredBrand && filteredPrice && filteredMileage;
    });

    return filteredCars;
  }
);
