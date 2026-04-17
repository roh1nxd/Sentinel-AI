const {
  startAgent,
  stopAgent,
  getStatus,
} = require("../services/agentService");

function statusController(req, res) {
  return res.status(200).json({ status: getStatus() });
}

function startController(req, res) {
  const started = startAgent();
  if (!started) {
    return res.status(400).json({ error: "Agent is already running" });
  }
  return res.status(200).json({ message: "Agent started successfully" });
}

function stopController(req, res) {
  const stopped = stopAgent();
  if (!stopped) {
    return res.status(400).json({ error: "Agent is already stopped" });
  }
  return res.status(200).json({ message: "Agent stopped successfully" });
}

module.exports = {
  statusController,
  startController,
  stopController,
};
