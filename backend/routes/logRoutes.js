const express = require("express");
const { logsController } = require("../controllers/logsController");

const router = express.Router();

router.get("/logs", logsController);

module.exports = router;
