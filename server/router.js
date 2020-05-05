const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running");
});

router.get("/testing", (req, res) => {
  res.send("Testing new routes");
});

module.exports = router;
