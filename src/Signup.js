import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const storedFirstName = localStorage.getItem("userFirstName");
    const storedLastName = localStorage.getItem("userLastName");
    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if a user is already signed up
    if (storedName && storedPassword) {
      setError("An account already exists. Please log in.");
      return;
    }

    // Check for missing fields
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.passwordConfirm
    ) {
      setError("Please fill out all fields.");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    // If all validations pass, save to localStorage and navigate to login
    localStorage.setItem("userFirstName", formData.firstname);
    localStorage.setItem("userLastName", formData.lastname);
    localStorage.setItem("userName", formData.name);
    localStorage.setItem("userPassword", formData.password);
    localStorage.setItem("userEmail", formData.email);
    setError("");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h1 className="font-bold text-2xl pb-3">Signup</h1>
      <form onSubmit={handleSignup}>
        <ul className="grid grid-cols-2 gap-3 mt-5">
          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              First Name
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="text"
              name="firstname"
              placeholder="Enter your firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </li>

          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              Last Name
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="text"
              name="lastname"
              placeholder="Enter your lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </li>

          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              Username
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </li>
          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              Email
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              Password
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </li>

          <li className="flex flex-col mx-6">
            <label htmlFor="" className=" py-1">
              Confirm Password
            </label>
            <input
              className="border-2 rounded p-5 border-yellow-600"
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button
          type="submit"
          className="bg-yellow-600 p-3 px-6 mt-5 w-80 text-white mx-auto"
        >
          Signup
        </button>
      </form>{" "}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3 className="pt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </h3>
    </div>
  );
}

export default Signup;
