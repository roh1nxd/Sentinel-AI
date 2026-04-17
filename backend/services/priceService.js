const axios = require("axios");

const DEFAULT_PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
let lastKnownPrice = 2300;

function getFallbackPrice() {
  const delta = (Math.random() - 0.5) * 4;
  lastKnownPrice = Number((lastKnownPrice + delta).toFixed(2));
  return lastKnownPrice;
}

async function fetchEthPrice() {
  const url = process.env.PRICE_API_URL || DEFAULT_PRICE_URL;
  try {
    const response = await axios.get(url, { timeout: 10000 });
    const price = response?.data?.ethereum?.usd;

    if (typeof price !== "number") {
      throw new Error("Invalid price response");
    }

    lastKnownPrice = price;
    return price;
  } catch (error) {
    // Keep fast demo mode reliable even when API rate limits.
    if (error?.response?.status === 429 || error?.code === "ECONNABORTED") {
      return getFallbackPrice();
    }
    throw error;
  }
}

module.exports = {
  fetchEthPrice,
};
