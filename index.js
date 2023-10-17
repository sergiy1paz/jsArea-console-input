const readline = require("readline-sync");

function inputAsync(question) {
  return new Promise((resolve) => {
    const answer = readline.question(question);
    resolve(answer);
  });
}

function input(question) {
  const answer = readline.question(question);
  return answer;
}

module.exports = { input, inputAsync };
