import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialstate: { count: 0 },
  reducers: {
    increament(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
  },
});
export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
