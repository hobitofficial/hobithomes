import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Label, Spinner, Alert } from "flowbite-react";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      // Make the signup request
      const res = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Check for errors in the response
      if (!res.ok || data.success === false) {
        return dispatch(signInFailure(data.message));
      }

      // If successful, redirect to signin page
      dispatch(signInSuccess(data.user));
      navigate("/");
    } catch (error) {
      return dispatch(signInFailure("Something Wrong!"));
    }
  };

  return (
    <section className="py-40 ">
      <Card className="max-w-md m-auto bg-black  shadow-lg border border-gray-500">
        {/* <h1 className="text-violet-500 text-center text-2xl ">Register</h1> */}
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
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
          <a href="/signup" className="text-white">
            Don&apos;t have account?{" "}
            <span className="text-violet-500 text-lg underline">Create</span>
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

          {error && (
            <Alert color="failure" className="mt-4">
              {error}
            </Alert>
          )}
        </form>
      </Card>
    </section>
  );
}
