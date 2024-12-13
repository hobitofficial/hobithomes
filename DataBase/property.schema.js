import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyName: {
      type: String,
    },
    location: {
      type: String,
    },
    propertyPurpose: {
      type: String,
      required: true,
    },
    term: {
      type: String,
    },
    minStayDuration: {
      type: {
        value: { type: Number, required: true },
        unit: { type: String, required: true }, // Example: 'days', 'weeks'
      },
      required: true,
    },
    guests: {
      type: Number,
      default: 1,
    },
    pseudoPrice: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    rooms: {
      type: {
        bedrooms: { type: Number, required: true },
        beds: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
      },
      required: true,
    },
    bhkOptions: {
      type: [String], // Example: ['2BHK', '3BHK']
    },
    furnishing: {
      type: String, // Example: 'Semi Furnished', 'Fully Furnished'
      required: true,
    },
    selectedAmenities: {
      type: [String], // Example: ['Washing machine', 'Free parking']
      required: true,
    },
    selectedBookingOptions: {
      type: [String], // Example: ['Instant Book', 'Allows pets']
      required: true,
    },
    selectedLanguages: {
      type: [String], // Example: ['Hindi', 'Punjabi']
      required: true,
    },
    selectedPropertyTypes: {
      type: [String], // Example: ['Hostel', 'Apartment']
      required: true,
    },
    listedBy: {
      type: String, // Example: 'Owner', 'Agent'
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    media: [
      {
        url: { type: String, required: true },
        type: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
