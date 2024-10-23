import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Update with your backend API URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred during registration."
    );
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred during login.";
  }
};

export const createDocument = async (token, content) => {
  try {
    const response = await axios.post(
      `${API_URL}/documents`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "An error occurred while creating the document."
    );
  }
};

// New function to fetch documents for the authenticated user
export const fetchDocuments = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/documents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "An error occurred while fetching documents."
    );
  }
};
