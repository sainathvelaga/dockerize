import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("/api")
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      <h1>Docker Microservices Demo</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
