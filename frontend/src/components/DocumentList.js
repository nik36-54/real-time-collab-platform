import React, { useEffect, useState } from "react";
import { fetchDocuments } from "../api/api";
import { useUser } from "../context/UserProvider";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const getDocuments = async () => {
      if (user) {
        const token = localStorage.getItem("token");
        try {
          const data = await fetchDocuments(token);
          setDocuments(data);
        } catch (error) {
          alert(error); // Display error
        }
      }
    };
    getDocuments();
  }, [user]);

  return (
    <div>
      <h2>Your Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.title || doc.content.slice(0, 20)}...</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
