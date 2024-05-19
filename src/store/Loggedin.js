import { createSlice, configureStore } from "@reduxjs/toolkit";

const logginSlice = createSlice({
  name: "log",
  initialState: {
    isLoggedin: false,
  },
  reducers: {
    login(state) {
      state.isLoggedin = true;
    },
  },
});
export const actions = logginSlice.actions;

const store = configureStore({
  reducer: logginSlice.reducer,
});

export default store;
