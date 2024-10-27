import Auth from "../DataBase/auth.schema.js";
import Property from "../DataBase/property.schema.js";

export default class PropertyController {
  async addProperty(req, res) {
    const { name, location, type, pseudoprice, price, description } = req.body;

    try {
      // Create a new property
      const newProperty = new Property({
        name,
        location,
        type,
        pseudoprice,
        price,
        description,
      });
      //   console.log(name, location, type, pseudoprice, price, description);
      // Save the new property to the database
      await newProperty.save();

      // Find the user by req.userId
      const user = await Auth.findOne({ _id: req.userId });
      //   console.log("user:", user, "userid:", req.userId);
      // Push the new property ID into the user's property array
      user.property.push(newProperty._id);

      // Save the updated user document
      await user.save();
      return res.status(200).json({ message: "Property added successfully!" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }

  async allProperty(req, res) {
    try {
      const properties = await Property.find();

      // Check if properties are found
      if (!properties || properties.length === 0) {
        return res.status(404).json({ message: "No properties found!" });
      }

      // Return the properties if found
      return res.status(200).json({ properties });
    } catch (err) {
      console.log(err.message);
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
}
