const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(5000, () =>
  console.log("Backend running on port 5000")
);
