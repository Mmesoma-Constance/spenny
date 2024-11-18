import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotUsername() {
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameRecovery = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");

    if (inputEmail === storedEmail) {
      setUsername(storedName);
    } else {
      setError("Email not found. Please check your input.");
    }
  };

  return (
    <div className="form-container">
      <h1>Forgot Username</h1>
      <form onSubmit={handleUsernameRecovery}>
        <input
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <button type="submit">Recover Username</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {username && <p>Your username is: {username}</p>}
      <div>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}

export default ForgotUsername;
