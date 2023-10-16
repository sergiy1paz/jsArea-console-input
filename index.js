const readline = require("readline");

function input(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

module.exports = { input };
