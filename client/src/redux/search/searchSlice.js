import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search", // Renamed to singular for consistency
  initialState: {
    searchData: null,
    stayDuration: null,
    error: null,
    loading: false,
  },
  reducers: {
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setStayDuration(state, action) {
      state.stayDuration = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

// Exporting actions and reducer
export const {
  setSearchData,
  setStayDuration,
  setLoading,
  setError,
  clearError,
} = searchSlice.actions;

export default searchSlice.reducer;
