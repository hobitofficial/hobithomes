import { createSlice } from "@reduxjs/toolkit";

const hostels = [
  {
    id: 1,
    name: "Mumbai Backpackers Hostel",
    location: "Andheri, Mumbai",
    pseudoPrice: "₹600",
    price: "₹500",
    rating: 4.5,
    description:
      "A cozy, budget-friendly hostel in the heart of Mumbai, perfect for solo travelers and backpackers. Close to public transport and city hotspots.",
    images: [
      "https://images.unsplash.com/photo-1560185127-6cbe1c3c326f",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1528475775096-5fd4d5b260c6",
    ],
    amenities: ["Free Wi-Fi", "Common Area", "Locker", "24/7 Reception"],
  },
  {
    id: 2,
    name: "Jaipur Heritage Hostel",
    location: "Pink City, Jaipur",
    pseudoPrice: "₹750",
    price: "₹600",
    rating: 4.8,
    description:
      "Located in the heart of Jaipur, this hostel offers an authentic Rajasthani experience with comfortable dorms, local art, and rooftop views.",
    images: [
      "https://images.unsplash.com/photo-1533111469745-66b5fd3bfe14",
      "https://images.unsplash.com/photo-1567690187548-fb91a52f064e",
      "https://images.unsplash.com/photo-1582719478144-c719b711b0b1",
    ],
    amenities: ["Free Breakfast", "Rooftop Terrace", "AC Rooms", "Laundry"],
  },
  {
    id: 3,
    name: "Goa Beach Hostel",
    location: "Anjuna Beach, Goa",
    pseudoPrice: "₹850",
    price: "₹700",
    rating: 4.7,
    description:
      "Perfect for beach lovers, this hostel offers direct access to Anjuna Beach, relaxed vibes, and a great community atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      "https://images.unsplash.com/photo-1504966981333-1a93d3b1f91c",
      "https://images.unsplash.com/photo-1531266763326-63724daca680",
    ],
    amenities: ["Beach Access", "Free Parking", "Bar & Cafe", "Game Room"],
  },
  {
    id: 4,
    name: "Delhi City Hostel",
    location: "Connaught Place, New Delhi",
    pseudoPrice: "₹700",
    price: "₹550",
    rating: 4.6,
    description:
      "A centrally located hostel ideal for exploring Delhi. Offers comfortable dorms, a vibrant common area, and helpful staff.",
    images: [
      "https://images.unsplash.com/photo-1542843137-346261e45b1d",
      "https://images.unsplash.com/photo-1511407397940-d57f68e81203",
      "https://images.unsplash.com/photo-1586306670079-4e2120ef52f3",
    ],
    amenities: ["Free Wi-Fi", "Library", "Lockers", "Airport Shuttle"],
  },
  {
    id: 5,
    name: "Bangalore Tech Hostel",
    location: "Koramangala, Bangalore",
    pseudoPrice: "₹800",
    price: "₹650",
    rating: 4.4,
    description:
      "Ideal for tech enthusiasts and digital nomads, this hostel offers modern facilities, workspaces, and a strong community vibe.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1546554137-f86b9593a222",
    ],
    amenities: ["Co-working Space", "Free Coffee", "Gym", "Library"],
  },
];

const hostelSlice = createSlice({
  name: "hostels",
  initialState: {
    hostels: hostels,
    currentHostel: null,
    error: null,
    loading: false,
  },
  reducers: {
    setCurrentHostel(state, action) {
      state.currentHostel = action.payload;
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

export const { setCurrentHostel, setLoading, setError, clearError } =
  hostelSlice.actions;

export default hostelSlice.reducer;
