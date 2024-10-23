import React from "react";
import "./Homepage.css"; // Optional: Add custom styles

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Doc Editor</h1>
      <p>Your one-stop solution for document creation and collaboration.</p>
      <img
        src="/path/to/your/image.jpg"
        alt="Doc Editor USP"
        className="usp-image"
      />
      <div className="actions">
        <a href="/login" className="btn">
          Login
        </a>
        <a href="/signup" className="btn">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default HomePage;
