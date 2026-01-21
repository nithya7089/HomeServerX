const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../../logs/app.log");

function log(message) {
  const entry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(logFile, entry);
}

function logError(message) {
  log(`ERROR: ${message}`);
}

module.exports = {
  log,
  logError
};
