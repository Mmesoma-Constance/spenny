import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmailRecovery() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameRecovery = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    console.log(storedEmail);

    if (inputEmail === storedEmail) {
      setPassword(storedPassword);
    } else {
      setError("Email not found. Please check your input.");
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
      <form onSubmit={handleUsernameRecovery}>
        <input
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <button type="submit">Recover Password</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {password && <p>Your password is: {password}</p>}
      <p>
        Couldn't remember email? <Link to="/forgot-password">Try Username</Link>
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

export default EmailRecovery;
