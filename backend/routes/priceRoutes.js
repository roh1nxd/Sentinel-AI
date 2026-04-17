const express = require("express");
const { priceController } = require("../controllers/priceController");

const router = express.Router();

router.get("/price", priceController);

module.exports = router;
