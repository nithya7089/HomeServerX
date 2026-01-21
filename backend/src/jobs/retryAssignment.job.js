const { retryAssignment } = require("../services/retry.service");

function startRetryJob() {
  setInterval(() => {
    // called externally when rejection / no-show happens
  }, 10000);
}

module.exports = { startRetryJob };
