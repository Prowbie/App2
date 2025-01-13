import React, { useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/v1/api/input", {
        id: parseInt(id, 10),
        name: name.trim(),
      });

      setResponse(`Success: ${res.data.status}`);
  } catch (error) {
    // Om det är ett fel, fånga det här
    if (error.response) {
      // Om backend skickade ett felmeddelande
      setResponse(error.response.data.error || "Ett okänt fel inträffade.");
    } else {
      // Om något annat fel inträffade
      setResponse("Ett okänt fel inträffade. Försök igen.");
    }
  }
};
return (
  <div
    style={{
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#000",  // Bakgrundsfärgen för hela sidan
      color: "#eee",  // Texten är ljus för att stå ut mot den svarta bakgrunden
      minHeight: "100vh",  // Se till att hela sidan täcks
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "750px",  // Boxen är nu 50% större (50% ökning från 500px till 750px)
        margin: "50px auto",
        backgroundColor: "#1e1e1e",  // Formuläret har en lite ljusare bakgrund
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>Input Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="id"
            style={{
              display: "block",
              fontSize: "1.1rem",
              marginBottom: "5px",
              color: "#00bcd4",  // Blått för etiketten
            }}
          >
            Number (ID):
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            style={{
              display: "block",
              width: "100%",  // Se till att inputfältet sträcker sig över hela bredden
              padding: "12px",
              backgroundColor: "#1e1e1e",  // Mörk bakgrund på input
              border: "2px solid #00bcd4",  // Blå kant
              borderRadius: "4px",
              color: "#eee",  // Ljus text för kontrast
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",  // Viktigt för att förhindra att paddingen gör fälten för breda
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontSize: "1.1rem",
              marginBottom: "5px",
              color: "#00bcd4",  // Blått för etiketten
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              display: "block",
              width: "100%",  // Se till att inputfältet sträcker sig över hela bredden
              padding: "12px",
              backgroundColor: "#1e1e1e",  // Mörk bakgrund på input
              border: "2px solid #00bcd4",  // Blå kant
              borderRadius: "4px",
              color: "#eee",  // Ljus text för kontrast
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",  // Viktigt för att förhindra att paddingen gör fälten för breda
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "12px 25px",
            backgroundColor: "#00bcd4",  // Blå knapp
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0097a7")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#00bcd4")}
        >
          Submit
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#2a2a2a",  // Mörk bakgrund för respons
            border: "1px solid #444",  // Ljusare kant för responsboxen
            borderRadius: "6px",
            color: "#f1f1f1",  // Ljus text för responsmeddelandet
          }}
        >
          <strong>Response:</strong> <span style={{ color: "#00bcd4" }}>{response}</span>
        </div>
      )}
    </div>
  </div>
);
}

export default App;
