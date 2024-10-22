import { createSlice } from "@reduxjs/toolkit";

// Retrieve user from localStorage, if exists
const storedUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: storedUser,
    error: null,
    loading: false,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;

      // Store user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;

      // Remove user from localStorage on sign out
      localStorage.removeItem("currentUser");
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signoutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
