import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import { loginUser } from "../api/api"; // Adjust this path as necessary

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const response = await loginUser(userData);

      // Store token in localStorage
      localStorage.setItem("token", response.token);
      navigate("/documents"); // Redirect to documents page after login
    } catch (err) {
      setError(err); // Set error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Login;
