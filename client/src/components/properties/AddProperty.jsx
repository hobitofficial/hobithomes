import { Button, Modal, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

export default function AddProperty() {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState("");
  const [propertyData, setPropertyData] = useState({
    name: "",
    // owner: "",
    type: "",
    location: "",
    pseudoprice: "",
    price: "",
    description: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (dummy handler for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const res = await fetch("/api/property/addproperty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyData),
      });

      // Check if the response is not okay
      if (!res.ok) {
        const errorData = await res.json(); // Get error message from response
        setError(errorData.message || "Property not created!"); // Set error message
        setLoading(false); // Set loading to false
        return; // Exit the function early
      }

      // Reset the state and close modal on successful property creation
      setError(null); // Clear any previous errors
      setOpenModal(false); // Close the modal
      alert("Property created!"); // Notify the user
    } catch (error) {
      console.log(error.message); // Log the error
      setError("An error occurred while creating the property.");
      return;
    }
  };

  return (
    <>
      <button
        className="text-white bg-violet-500 hover:bg-violet-700 p-2 rounded-lg shadow-lg"
        onClick={() => setOpenModal(true)}
      >
        Add Property
      </button>

      {/* Modal with proper border styling */}
      <div className="rounded-lg">
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="bg-black rounded-t-lg">
            <span className="text-violet-500">Add New Property</span>
          </Modal.Header>
          <Modal.Body className="bg-black">
            <form onSubmit={handleSubmit}>
              {/* <div>
                <input type="file" multiple />
              </div> */}
              <div className="space-y-6">
                {/* Property Name */}
                {/* <div>
                  <Label
                    htmlFor="ownername"
                    value="Owner Name"
                    className="text-white"
                  />
                  <TextInput
                    id="ownername"
                    name="ownername"
                    placeholder="Enter Owner name "
                    required
                    value={propertyData.owner}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div> */}
                <div>
                  <Label
                    htmlFor="name"
                    value="Property Name"
                    className="text-white"
                  />
                  <TextInput
                    id="name"
                    name="name"
                    placeholder="Enter property name "
                    required
                    value={propertyData.name}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <Label
                    htmlFor="type"
                    value="Property Type"
                    className="text-white"
                  />
                  <TextInput
                    id="type"
                    name="type"
                    placeholder="Enter property type"
                    required
                    value={propertyData.type}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>

                {/* Location */}
                <div>
                  <Label
                    htmlFor="location"
                    value="Location"
                    className="text-white"
                  />
                  <TextInput
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    required
                    value={propertyData.location}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>

                {/* Pseudo Price */}
                <div>
                  <Label
                    htmlFor="pseudoprice"
                    value="Pseudo Price (Rs.)"
                    className="text-white"
                  />
                  <TextInput
                    id="pseudoprice"
                    name="pseudoprice"
                    placeholder="Enter pseudo price"
                    required
                    type="number"
                    value={propertyData.pseudoprice}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>

                {/* Price */}
                <div>
                  <Label
                    htmlFor="price"
                    value="Price (Rs.)"
                    className="text-white"
                  />
                  <TextInput
                    id="price"
                    name="price"
                    placeholder="Enter price"
                    required
                    type="number"
                    value={propertyData.price}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label
                    htmlFor="description"
                    value="Description"
                    className="text-white"
                  />
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter property description"
                    required
                    value={propertyData.description}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-lg"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="bg-black rounded-b-lg">
            <Button className="bg-violet-500" onClick={handleSubmit}>
              {loading ? "Loading..." : "Submit"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
          {error && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{error}</span>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
