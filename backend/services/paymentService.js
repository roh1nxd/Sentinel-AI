async function payWithX402() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return {
    success: true,
    transactionId: `x402-${Date.now()}`,
  };
}

module.exports = {
  payWithX402,
};
