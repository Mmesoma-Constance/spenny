import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [inputNameEmail, setinputNameEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (!inputNameEmail || !inputPassword) {
      setError("Please enter both name and Password.");
      return;
    }

    if (!storedName || !storedEmail || !storedPassword) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (inputNameEmail !== storedName && inputNameEmail !== storedEmail) {
      setError("Name/email does not match our records. Please try again.");
    } else if (inputPassword !== storedPassword) {
      setError("Password does not match our records. Please try again.");
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="form-container">
      <h1 className="font-bold text-2xl pb-5">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="border-2 rounded p-5 border-yellow-600"
          type="text"
          placeholder="Enter your name or email"
          value={inputNameEmail}
          onChange={(e) => setinputNameEmail(e.target.value)}
        />
        <input
          className="border-2 rounded p-5 border-yellow-600"
          type="text"
          placeholder="Enter your Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-600 p-3 px-6 mt-1 w-full text-white"
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="text-left pt-4 self-start mx-auto">
        <h3 className="underline">
          {/* Forgot your details?{" "} */}
          {/* <Link to="/forgot-username">Forgot Username?</Link> | */}
          <Link to="/forgot-password">Forgot Password?</Link>
        </h3>

        <h3>
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-700">
            Sign Up
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default Login;
