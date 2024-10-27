import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import propertyReducer from "./property/propertySlice.js";
import hostelReducer from "./hostels/hostelSlice.js";
import searchReducer from "./search/searchSlice.js";

// You don't need to manually use combineReducers unless you have multiple slices
const store = configureStore({
  reducer: {
    user: userReducer,
    property: propertyReducer,
    hostels: hostelReducer,
    searchs: searchReducer,
  },
});

export default store;
