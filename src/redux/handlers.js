export const handleFulfilled = (state) => {
  state.cars.isLoading = false;
  state.cars.error = null;
};

export const handlePending = (state) => {
  state.cars.isLoading = true;
  state.cars.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.cars.isLoading = false;
  state.cars.error = payload;
};
