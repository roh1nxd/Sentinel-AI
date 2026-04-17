const logs = [];

function timestamp() {
  return new Date().toLocaleTimeString("en-US", { hour12: false });
}

function addLog(message) {
  logs.push(`[${timestamp()}] ${message}`);
}

function getLogs() {
  return [...logs];
}

function clearLogs() {
  logs.length = 0;
}

module.exports = {
  addLog,
  getLogs,
  clearLogs,
};
