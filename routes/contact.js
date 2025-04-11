const express = require("express");
const router = express.Router();
const { syncContact } = require("../controllers/contactController");

// POST endpoint to simulate syncing contact data from Zeotap to Salesforce
router.post("/sync-contact", syncContact);

module.exports = router;
