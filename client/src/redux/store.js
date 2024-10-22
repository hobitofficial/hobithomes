import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

// You don't need to manually use combineReducers unless you have multiple slices
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
