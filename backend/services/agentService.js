const { fetchEthPrice } = require("./priceService");
const { calculateChangePercent, getDecision } = require("./strategyService");
const { payWithX402 } = require("./paymentService");
const { executeTrade } = require("./tradeService");
const { addLog } = require("../utils/logger");

const state = {
  running: false,
  intervalId: null,
  intervalMs: Number(process.env.AGENT_INTERVAL_MS) || 5000,
  lastPrice: null,
  currentPrice: null,
  currentPosition: "NONE",
  entryPrice: null,
  isCycleRunning: false,
};

async function runCycle() {
  if (state.isCycleRunning) return;
  state.isCycleRunning = true;

  try {
    addLog("Fetching price...");
    const currentPrice = await fetchEthPrice();
    state.currentPrice = currentPrice;
    addLog(`Current price: $${currentPrice}`);

    if (state.lastPrice === null) {
      state.lastPrice = currentPrice;
      addLog("First run detected. Waiting for next cycle.");
      return;
    }

    const changePercent = calculateChangePercent(currentPrice, state.lastPrice);
    addLog(`Change: ${changePercent.toFixed(2)}%`);

    const decision = getDecision(changePercent, state);
    addLog(`Decision: ${decision.action}`);
    addLog(`Reason: ${decision.reason}`);

    if (decision.action === "HOLD") {
      state.lastPrice = currentPrice;
      return;
    }

    addLog("Initiating x402 payment...");
    const paymentResult = await payWithX402();
    if (!paymentResult.success) {
      addLog("Payment failed. Trade skipped.");
      state.lastPrice = currentPrice;
      return;
    }
    addLog(`Payment successful (${paymentResult.transactionId})`);

    addLog(`Executing ${decision.action} trade...`);
    const tradeResult = await executeTrade(decision.action, currentPrice);
    if (!tradeResult.success) {
      addLog("Trade failed.");
      state.lastPrice = currentPrice;
      return;
    }

    if (decision.action === "BUY") {
      state.currentPosition = "BUY";
      state.entryPrice = currentPrice;
    } else {
      state.currentPosition = "NONE";
      state.entryPrice = null;
    }

    addLog(`Trade successful (${tradeResult.txHash})`);
    state.lastPrice = currentPrice;
  } catch (error) {
    addLog(`Cycle error: ${error.message}`);
  } finally {
    state.isCycleRunning = false;
  }
}

function startAgent() {
  if (state.running) return false;
  state.running = true;
  addLog(`Agent started. Interval: ${state.intervalMs}ms`);
  runCycle();
  state.intervalId = setInterval(runCycle, state.intervalMs);
  return true;
}

function stopAgent() {
  if (!state.running) return false;
  clearInterval(state.intervalId);
  state.intervalId = null;
  state.running = false;
  addLog("Agent stopped.");
  return true;
}

function getStatus() {
  return state.running ? "running" : "stopped";
}

function getCurrentPrice() {
  return state.currentPrice;
}

module.exports = {
  startAgent,
  stopAgent,
  getStatus,
  getCurrentPrice,
};
