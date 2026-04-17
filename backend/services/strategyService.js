function calculateChangePercent(currentPrice, lastPrice) {
  if (!lastPrice) return 0;
  return ((currentPrice - lastPrice) / lastPrice) * 100;
}

function getDecision(changePercent, state) {
  if (
    state.currentPosition === "BUY" &&
    state.entryPrice &&
    ((state.entryPrice - state.currentPrice) / state.entryPrice) * 100 >= 2
  ) {
    return {
      action: "SELL",
      reason: "Stop-loss triggered at 2% loss",
    };
  }

  if (changePercent <= -3) {
    return { action: "BUY", reason: "Price dropped at least 3%" };
  }

  if (changePercent >= 4) {
    return { action: "SELL", reason: "Price increased at least 4%" };
  }

  return { action: "HOLD", reason: "No trade condition met" };
}

module.exports = {
  calculateChangePercent,
  getDecision,
};
