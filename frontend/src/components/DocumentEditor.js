import React, { useState } from "react";
import Quill from "react-quill"; // Import Quill editor
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { fetchDocuments } from "../api/api"; // Adjust this path as necessary

const DocumentEditor = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to save a document."); // Error message if not logged in
      return;
    }

    try {
      const response = await fetch("/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to save document.");
      }

      const data = await response.json();
      console.log(data);
      navigate("/documents"); // Redirect to the documents list after saving
    } catch (err) {
      setError(err.message || "An error occurred while saving the document."); // Set error message
    }
  };

  return (
    <div>
      <Quill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save Document</button>
      {error && <p className="error">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default DocumentEditor;
