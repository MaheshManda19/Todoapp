import React, { useState } from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../common/constants/Userdetails";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Logged in successfully!");
      navigate("/Home");
    } else if (email && password) {
      alert("Invalid credentials. Please try again.");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
