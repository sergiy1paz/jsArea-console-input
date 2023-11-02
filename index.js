const readlineSync = require("readline-sync");
const readline = require("readline");

function inputAsync(question) {
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

function input(question) {
  const answer = readlineSync.question(question);
  return answer;
}

module.exports = { input, inputAsync };
