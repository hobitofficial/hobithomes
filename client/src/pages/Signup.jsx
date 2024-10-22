import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Label, Spinner, Alert } from "flowbite-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    person: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Handle selection change for 'person' field
  const handleSelectChange = (e) => {
    setFormData({ ...formData, person: e.target.value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);
      console.log(formData);
      // Make the signup request
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Check for errors in the response
      if (!res.ok || data.success === false) {
        setLoading(false);
        return setErrorMessage("Signup failed!");
      }

      // If successful, redirect to signin page
      setLoading(false);

      navigate("/signin");
    } catch (error) {
      setErrorMessage("Signup failed!");
      setLoading(false);
    }
  };

  return (
    <section className="pt-40 ">
      <div className="border  max-w-lg m-auto p-4 rounded-lg">
        <Card className="max-w-lg m-auto bg-black ">
          {/* <h1 className="text-violet-500 text-center text-2xl ">Register</h1> */}
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Your Name"
                  className="text-violet-500 text-xl"
                />
              </div>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="phone"
                  value="Phone No"
                  className="text-violet-500 text-xl"
                />
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="1235456870"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your Email"
                  className="text-violet-500 text-xl"
                />
              </div>
              <input
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Your Password"
                  className="text-violet-500 text-xl"
                />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="person"
                  value="Person Type"
                  className="text-violet-500 text-xl"
                />
              </div>
              <select
                id="person"
                value={formData.person}
                onChange={handleSelectChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              >
                <option
                  value=""
                  className="bg-black text-white hover:bg-violet-300"
                >
                  Choose Role
                </option>
                <option
                  value="admin"
                  className="bg-black text-white hover:bg-violet-300"
                >
                  Admin (Create Property)
                </option>
                <option
                  value="user"
                  className="bg-black text-white hover:bg-violet-300"
                >
                  User (Explore Property)
                </option>
              </select>
            </div>
            <a href="/signin" className="text-white">
              Allready have account?{" "}
              <span className="text-violet-500 text-lg underline">Login</span>
            </a>
            <button
              type="submit"
              disabled={loading}
              className="bg-violet-500 p-2 text-xl text-white rounded-md  m-auto shadow-lg hover:bg-violet-700  "
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-2">Submitting...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>

            {errorMessage && (
              <Alert color="failure" className="mt-4">
                {errorMessage}
              </Alert>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
