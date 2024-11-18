import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");

    if (!inputName || !inputPassword) {
      setError("Please enter both name and Password.");
      return;
    }

    if (!storedName || !storedPassword) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (inputName !== storedName) {
      setError("Name does not match our records. Please try again.");
    } else if (inputPassword !== storedPassword) {
      setError("Password does not match our records. Please try again.");
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h3>
          {/* Forgot your details?{" "} */}
          {/* <Link to="/forgot-username">Forgot Username?</Link> | */}
          <Link to="/forgot-password">Forgot Password?</Link>
        </h3>

        <h3>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </h3>
      </div>
    </div>
  );
}

export default Login;
