import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchronous thunk to fetch properties
export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/property/adminProperty/${userId}`
      );
      return response.data; // Return the properties data from the API
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch properties"
      );
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [], // Default to an empty array
    currentProperty: null,
    updateProperty: null,
    error: null,
    loading: false,
  },
  reducers: {
    setCurrentProperty(state, action) {
      state.currentProperty = action.payload;
      state.error = null;
      state.loading = false;
    },
    updateCurrentProperty(state, action) {
      state.updateProperty = action.payload;
    },
    setLoading(state) {
      state.error = null;
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.properties = action.payload || []; // Ensure it's an array
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  setCurrentProperty,
  updateCurrentProperty,
  setError,
  clearError,
  setLoading,
} = propertySlice.actions;

export default propertySlice.reducer;
