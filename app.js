const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 48753;

// Middleware to parse JSON requests
app.use(express.json());

// Route for syncing contacts
app.use("/api", contactRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Zeotap ↔ Salesforce Integration Simulation is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
