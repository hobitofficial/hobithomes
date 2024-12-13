import User from "../DataBase/user.schema.js";
import Property from "../DataBase/property.schema.js";
export default class PropertyController {
  async addProperty(req, res) {
    const {
      location, // Ensure this is included in your request body
      propertyPurpose,
      term,
      minStayDuration,
      guests,
      pseudoPrice,
      price,
      rooms,
      bhkOptions,
      furnishing,
      selectedAmenities,
      selectedBookingOptions,
      selectedLanguages,
      selectedPropertyTypes,
      listedBy,
      description,
    } = req.body;

    try {
      // Ensure media files were uploaded and processed
      const mediaUrls = req.uploadedFiles;
      if (!mediaUrls || mediaUrls.length === 0) {
        return res.status(400).json({ message: "No media files uploaded" });
      }

      // Parse the incoming JSON strings
      const parsedMinStayDuration = JSON.parse(minStayDuration);
      const parsedRooms = JSON.parse(rooms);
      const parsedSelectedAmenities = JSON.parse(selectedAmenities);
      const parsedSelectedBookingOptions = JSON.parse(selectedBookingOptions);
      const parsedSelectedPropertyTypes = JSON.parse(selectedPropertyTypes);
      const parsedSelectedLanguages = JSON.parse(selectedLanguages);
      const parsedBhkOptions = JSON.parse(bhkOptions);

      // Create a new property document
      const newProperty = new Property({
        location, // Ensure this field is included in your request
        propertyPurpose,
        term,
        minStayDuration: {
          value: parsedMinStayDuration.value,
          unit: parsedMinStayDuration.unit,
        },
        guests: Number(guests), // Convert to Number
        pseudoPrice: Number(pseudoPrice), // Convert to Number
        price: Number(price), // Convert to Number
        rooms: {
          bedrooms: parsedRooms.bedrooms,
          beds: parsedRooms.beds,
          bathrooms: parsedRooms.bathrooms,
        },
        bhkOptions: parsedBhkOptions,
        furnishing,
        selectedAmenities: parsedSelectedAmenities,
        selectedBookingOptions: parsedSelectedBookingOptions,
        selectedLanguages: parsedSelectedLanguages,
        selectedPropertyTypes: parsedSelectedPropertyTypes,
        listedBy,
        description,
        media: mediaUrls.map((file) => ({
          id: file.id, // Assuming file.id exists
          url: file.url,
          type: file.type,
        })),
      });
<<<<<<< HEAD

      // Save the property to the database
      await newProperty.save();

      // Associate property with the authenticated user
      const user = await User.findOne({
        _id: new Object("6717d18b5898d8aa7e228fdc"),
      });
      if (!user) {
        return res.status(404).json({ message: "User  not found" });
      }

=======
      //   console.log(name, location, type, pseudoprice, price, description);
      // Save the new property to the database
      await newProperty.save();

      // Find the user by req.userId
      const user = await Auth.findOne({ _id: req.userId });
      //   console.log("user:", user, "userid:", req.userId);
      // Push the new property ID into the user's property array
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      user.property.push(newProperty._id);
      await user.save();
<<<<<<< HEAD
      // Respond with success
      return res.status(200).json({
        message: "Property added successfully!",
        property: newProperty,
      });
    } catch (err) {
      console.error("Error adding property:", err.message);
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation error", errors: err.errors });
      }
      return res
        .status(500)
        .json({ message: "Something went wrong", error: err.message });
    }
  }

  async periodicProperty(req, res) {
    // Extract and normalize the stayDuration parameter
    const stayDuration = String(req.params.stayDuration);

    try {
      // Fetch properties based on the stay duration
      const properties = await Property.find({ term: stayDuration }).sort({
        updatedAt: -1,
      });
      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
    } catch (err) {
      console.error(err.message); // Use console.error for error logging
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
  // async longTimeProperty(req, res) {
  //   try {
  //     const properties = await Property.find({ term: "longTerm" }).sort({
  //       updatedAt: -1,
  //     });

  //     // Check if properties are found
  //     if (!properties || properties.length === 0) {
  //       return res.status(404).json({ message: "No properties found!" });
  //     }

  //     // Return the properties if found
  //     return res.status(200).json({ properties });
  //   } catch (err) {
  //     console.log(err.message);
  //     return res.status(500).json({ message: "Something went wrong!" });
  //   }
  // }
  async allProperty(req, res) {
    try {
      const properties = await Property.find({}).sort({ updatedAt: -1 });

      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
=======
      return res.status(200).json({ message: "Property added successfully!" });
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }

<<<<<<< HEAD
  async adminProperty(req, res) {
    // Extract userId from request parameters
    const userId = req.params.userId; // Assuming the route is something like /adminProperty/:userId
    try {
      // Convert userId to ObjectId

      // Find the user by ID
      const user = await User.findById(new Object(userId));

      const propertiesId = user.property;
      // Use Promise.all to fetch properties concurrently
      const properties = await Promise.all(
        propertiesId.map(async (id) => {
          return await Property.findById(new Object(id)); // Use findById for a single property
        })
      );

      // Filter out any null properties (in case some IDs do not match any property)
      const validProperties = properties.filter(
        (property) => property !== null
      );

      // // Sort properties by createdAt
      validProperties.sort((a, b) => b.createdAt - a.createdAt);

      // // Check if properties are found
      if (validProperties.length === 0) {
=======
  async allProperty(req, res) {
    try {
      const properties = await Property.find();

      // Check if properties are found
      if (!properties || properties.length === 0) {
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
<<<<<<< HEAD
      return res.status(200).json({ properties: validProperties });
    } catch (err) {
      console.error("Error fetching properties:", err); // Log the entire error for debugging
=======
      return res.status(200).json({ properties });
    } catch (err) {
      console.log(err.message);
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }

  async deleteProperty(req, res) {
    try {
      const { propertyId } = req.params;

      // Find and delete the property by ID
      const result = await Property.findByIdAndDelete(propertyId);

      if (result) {
        return res
          .status(200)
          .json({ message: "Property Deleted Successfully!" });
      }

      // If no result is found, property does not exist
      return res.status(404).json({ message: "Property Not Found!" });
    } catch (err) {
      console.error("Failed to delete property:", err.message);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }
<<<<<<< HEAD

  async updateProperty(req, res) {
    const propId = new Object(req.params.propertyId);
    const {
      propertyName,
      location,
      propertyPurpose,
      term,
      minStayDuration,
      guests,
      pseudoPrice,
      price,
      rooms,
      bhkOptions,
      furnishing,
      selectedAmenities,
      selectedBookingOptions,
      selectedLanguages,
      selectedPropertyTypes,
      listedBy,
      description,
    } = req.body;

    try {
      // Ensure media files were uploaded and processed
      const mediaUrls = req.uploadedFiles;
      if (!mediaUrls || mediaUrls.length === 0) {
        return res.status(400).json({ message: "No media files uploaded" });
      }

      // Parse the incoming JSON strings
      const parsedMinStayDuration = JSON.parse(minStayDuration);
      const parsedRooms = JSON.parse(rooms);
      const parsedSelectedAmenities = JSON.parse(selectedAmenities);
      const parsedSelectedBookingOptions = JSON.parse(selectedBookingOptions);
      const parsedSelectedPropertyTypes = JSON.parse(selectedPropertyTypes);
      const parsedSelectedLanguages = JSON.parse(selectedLanguages);
      const parsedBhkOptions = JSON.parse(bhkOptions);

      // Update the property document
      const result = await Property.findOneAndUpdate(
        { _id: propId },
        {
          propertyName,
          location,
          propertyPurpose,
          term,
          minStayDuration: {
            value: parsedMinStayDuration.value,
            unit: parsedMinStayDuration.unit,
          },
          guests: Number(guests),
          pseudoPrice: Number(pseudoPrice),
          price: Number(price),
          rooms: {
            bedrooms: parsedRooms.bedrooms,
            beds: parsedRooms.beds,
            bathrooms: parsedRooms.bathrooms,
          },
          bhkOptions: parsedBhkOptions,
          furnishing,
          selectedAmenities: parsedSelectedAmenities,
          selectedBookingOptions: parsedSelectedBookingOptions,
          selectedLanguages: parsedSelectedLanguages,
          selectedPropertyTypes: parsedSelectedPropertyTypes,
          listedBy,
          description,
          media: mediaUrls.map((file) => ({
            url: file.url,
            type: file.type,
          })),
        },
        { new: true } // This option returns the updated document
      );

      if (!result) {
        return res.status(404).json({ message: "Property not found!" });
      }

      return res.status(200).json({
        message: "Property updated successfully!",
        property: result, // Optionally return the updated property
      });
    } catch (err) {
      console.error("Failed to update property:", err.message);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }

  async hostelAndPgProperty(req, res) {
    try {
      const properties = await Property.find({})
        .sort({ updatedAt: -1 })
        .limit(5);

      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
    } catch (err) {
      console.error("Error fetching properties:", err); // Log the entire error for debugging
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
  async hotelProperty(req, res) {
    try {
      const properties = await Property.find({})
        .sort({ updatedAt: -1 })
        .limit(5);

      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
    } catch (err) {
      console.error("Error fetching properties:", err); // Log the entire error for debugging
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
  async houseAndStudioProperty(req, res) {
    try {
      const properties = await Property.find({})
        .sort({ updatedAt: -1 })
        .limit(5);

      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
    } catch (err) {
      console.error("Error fetching properties:", err); // Log the entire error for debugging
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
=======
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
}
