import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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

    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if a user is already signed up
    if (storedName && storedPassword) {
      setError("An account already exists. Please log in.");
      return;
    }

    // Check for missing fields
    if (
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
    localStorage.setItem("userName", formData.name);
    localStorage.setItem("userPassword", formData.password);
    setError("");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>
        Already have an account? <Link to="/login">Log in</Link>
      </h3>
    </div>
  );
}

export default Signup;
