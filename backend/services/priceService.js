const axios = require("axios");

const DEFAULT_PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

async function fetchEthPrice() {
  const url = process.env.PRICE_API_URL || DEFAULT_PRICE_URL;
  const response = await axios.get(url, { timeout: 10000 });
  const price = response?.data?.ethereum?.usd;

  if (typeof price !== "number") {
    throw new Error("Invalid price response");
  }

  return price;
}

module.exports = {
  fetchEthPrice,
};
