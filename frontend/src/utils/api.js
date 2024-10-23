import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Base URL for API

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data; // Return data on successful registration
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred during registration."
    );
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data; // Return data on successful login
  } catch (error) {
    // Corrected error handling to ensure message is wrapped correctly
    throw error.response?.data?.message || "An error occurred during login.";
  }
};

// Function to fetch documents
export const fetchDocuments = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/documents`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return documents
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "An error occurred while fetching documents."
    );
  }
};
