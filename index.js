const readline = require("readline");
const prompt = require("prompt-sync")();

function input(question) {
  const answer = prompt(question);
  return answer;
}

process.stdout.setEncoding("utf8");
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

module.exports = { input, inputAsync };
