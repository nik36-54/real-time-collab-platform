import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import { registerUser } from "../api/api"; // Adjust this path as necessary

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, email, password };
      const response = await registerUser(userData);

      // Optionally store token in localStorage
      localStorage.setItem("token", response.token);
      navigate("/documents"); // Redirect to documents page after registration
    } catch (err) {
      setError(err); // Set error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Register;
