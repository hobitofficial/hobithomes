import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search", // Renamed to singular for consistency
  initialState: {
    searchData: null,
<<<<<<< HEAD
    stayDuration: "shortTerm",
=======
    stayDuration: null,
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
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
