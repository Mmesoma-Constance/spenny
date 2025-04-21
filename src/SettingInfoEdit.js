import React, { useState, useEffect } from "react";
import "./goals.css";

const SettingInfoEdit = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState(profile || {});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setFormData(profile || {});
  }, [profile]);

  // Validate input fields
  const validateForm = (name, value) => {
    let errorMsg = "";

    if (name === "firstName" || name === "lastName") {
      if (!value.trim()) {
        errorMsg = `${name.replace(/([A-Z])/g, " $1")} cannot be empty.`;
      }
    }

    if (name === "username" && value.length < 3) {
      errorMsg = "Username must be at least 3 characters.";
    }

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Invalid email format.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
    return errorMsg === "";
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field
    validateForm(name, value);

    // Check overall form validity
    setIsFormValid(
      Object.values({
        ...errors,
        [name]: validateForm(name, value) ? "" : errors[name],
      }).every((err) => err === "") &&
        Object.values({ ...formData, [name]: value }).every(
          (val) => val.trim() !== ""
        )
    );
  };

  // Save new data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const existingPassword = localStorage.getItem("userPassword");

      // Save updated profile
      localStorage.setItem("profile", JSON.stringify(formData));

      // Ensure password remains unchanged
      if (!localStorage.getItem("userPassword")) {
        localStorage.setItem("userPassword", existingPassword);
      }

      onSave(formData);
    }
  };

  return (
    <section className="mt-5">
      <div className="border-2 p-5 rounded-md">
        <form onSubmit={handleSubmit}>
          <ul className="mt-4 grid grid-cols-2 gap-8">
            <li>
              <h4 className="opacity-80 text-base">First Name</h4>
              <input
                name="firstName"
                type="text"
                className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.firstName || ""}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </li>
            <li>
              <h4 className="opacity-80 text-base">Last Name</h4>
              <input
                name="lastName"
                type="text"
                className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.lastName || ""}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </li>
            <li>
              <h4 className="opacity-80 text-base">UserName</h4>
              <input
                name="username"
                type="text"
                className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.username || ""}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </li>
            <li>
              <h4 className="opacity-80 text-base">Email</h4>
              <input
                name="email"
                type="text"
                className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.email || ""}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full p-2 px-8 rounded-lg ${
                isFormValid
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-600 bg-opacity-50 text-gray-200 cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full bg-gray-400 text-white p-2 px-8 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingInfoEdit;
