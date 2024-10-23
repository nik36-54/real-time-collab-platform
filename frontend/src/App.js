import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import DocumentList from "./components/DocumentList";
import DocumentEditor from "./components/DocumentEditor";
import HomePage from "./components/Homepage";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <div>
          {/* Routes for different components */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/editor" element={<DocumentEditor />} />
            <Route path="/documents" element={<DocumentList />} />
            {/* Add other routes as necessary */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
