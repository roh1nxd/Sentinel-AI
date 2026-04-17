const { getCurrentPrice } = require("../services/agentService");

function priceController(req, res) {
  const price = getCurrentPrice();
  if (price === null) {
    return res.status(200).json({ price: null, message: "Price not fetched yet" });
  }
  return res.status(200).json({ price });
}

module.exports = {
  priceController,
};
