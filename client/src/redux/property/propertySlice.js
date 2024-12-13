<<<<<<< HEAD
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
=======
import { createSlice } from "@reduxjs/toolkit";

const properties = [
  {
    id: 1,
    name: "Modern Luxury Apartment",
    type: "2BHK",
    pseudoprice: "₹38,000",
    price: "₹30,000",
    location: "Bandra, Mumbai",
    description: "Spacious and modern 2BHK apartment with premium amenities.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1600585154340-be6161dc9d49",
    ],
    beds: 2,
    baths: 2,
    sqft: 1200,
  },
  {
    id: 2,
    name: "Beachside Villa",
    type: "4BHK",
    pseudoprice: "₹2,80,00,000",
    price: "₹2,50,00,000",
    location: "ECR, Chennai",
    description: "Luxurious 4BHK villa with direct access to the beach.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1560448204-e92f6b0b866f",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ],
    beds: 4,
    baths: 4,
    sqft: 3500,
  },
  {
    id: 3,
    name: "City Center Penthouse",
    type: "3BHK",
    pseudoprice: "₹1,90,00,000",
    price: "₹1,75,00,000",
    location: "Connaught Place, Delhi",
    description: "Exclusive penthouse in the heart of Delhi with city views.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1560448204-e92f6b0b866f",
    ],
    beds: 3,
    baths: 3,
    sqft: 2000,
  },
  {
    id: 4,
    name: "Hill View Villa",
    type: "5BHK",
    pseudoprice: "₹3,80,00,000",
    price: "₹3,50,00,000",
    location: "Lonavala, Maharashtra",
    description:
      "Beautiful 5BHK villa with stunning hill views and modern facilities.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1560448204-e92f6b0b866f",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    ],
    beds: 5,
    baths: 4,
    sqft: 5000,
  },
];
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

const propertySlice = createSlice({
  name: "property",
  initialState: {
<<<<<<< HEAD
    properties: [], // Default to an empty array
    currentProperty: null,
    updateProperty: null,
=======
    properties: properties,
    currentProperty: null,
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
    error: null,
    loading: false,
  },
  reducers: {
    setCurrentProperty(state, action) {
      state.currentProperty = action.payload;
<<<<<<< HEAD
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
=======
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

export const { setCurrentProperty, setLoading, setError, clearError } =
  propertySlice.actions;
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

export default propertySlice.reducer;
