import { useState } from "react";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value, // Update the corresponding field
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Fix typo from e.preventDefalut()
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        setLoading(false);
        setError("Failed to send message.");
        return;
      }

      setLoading(false);
      setError(null);
      alert("Thanks for contacting us, message sent successfully!");
      setContactData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl text-white m-auto my-24 bg-gray-900 shadow-lg rounded-xl">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-violet-500">
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="block w-full mb-4">
              <span className="text-lg">Name:</span>
              <input
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-lg text-white bg-black border border-white rounded"
                placeholder="Your Name"
              />
            </label>
            <label className="block w-full mb-4">
              <span className="text-lg">Email:</span>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-lg text-white bg-black border border-white rounded"
                placeholder="your@email.com"
              />
            </label>
          </div>
          <div className="flex flex-wrap mb-4">
            <label className="block w-full mb-2">
              <span className="text-lg">Phone:</span>
              <input
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-lg text-white bg-black border border-white rounded"
                placeholder="123-456-7890"
              />
            </label>
          </div>
          <div className="flex flex-wrap mb-4">
            <label className="block w-full mb-2">
              <span className="text-lg">Subject:</span>
              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-lg text-white bg-black border border-white rounded"
                placeholder="Your Subject"
              />
            </label>
          </div>
          <div className="flex flex-wrap mb-4">
            <label className="block w-full mb-2">
              <span className="text-lg">Message:</span>
              <textarea
                rows="5"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-lg text-white bg-black border border-white rounded"
                placeholder="Your Message"
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
            disabled={loading} // Disable button during submission
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {error && (
          <div
            className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
