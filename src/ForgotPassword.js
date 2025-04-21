import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";

function ForgotPassword() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordRecovery = (e) => {
    e.preventDefault();

    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");
    console.log(storedName);

    if (inputName === storedName) {
      setPassword(storedPassword);
    } else {
      setError("Username not found. Please check your input.");
    }
  };

  const handleDeleteAccount = () => {
    // Remove all account-related data from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userPasswordConfirm");

    // Navigate to the signup page after deletion
    navigate("/signup");
  };

  return (
    <div className="form-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handlePasswordRecovery}>
        <input
          type="text"
          placeholder="Enter your username"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit">Recover Password</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {password && <p>Your password is: {password}</p>}
      <p>
        Couldn't remember username? <Link to="/email-recovery">Try Email</Link>
      </p>
      <p>
        <span onClick={handleDeleteAccount}>re-register</span>
      </p>
      <div>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
