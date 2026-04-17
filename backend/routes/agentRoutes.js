const express = require("express");
const {
  statusController,
  startController,
  stopController,
} = require("../controllers/agentController");

const router = express.Router();

router.get("/status", statusController);
router.post("/start", startController);
router.post("/stop", stopController);

module.exports = router;
