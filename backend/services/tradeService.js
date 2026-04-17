async function executeTrade(action, price) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    success: true,
    action,
    price,
    txHash: `0x${Date.now().toString(16)}`,
  };
}

module.exports = {
  executeTrade,
};
