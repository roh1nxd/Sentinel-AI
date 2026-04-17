const { getLogs } = require("../utils/logger");

function logsController(req, res) {
  return res.status(200).json({ logs: getLogs() });
}

module.exports = {
  logsController,
};
