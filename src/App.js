import React, { useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/v1/api/input", {
        id: parseInt(id, 10),
        name: name,
      });

      setResponse(res.data.status);
    } catch (error) {
      setResponse(
        error.response?.data?.errors
          ? JSON.stringify(error.response.data.errors)
          : "An error occurred"
      );
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id">Number (ID):</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {response && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;

