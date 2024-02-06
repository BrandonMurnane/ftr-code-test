const readline = require("readline");
const pauseable = require("pauseable");
const {
  isFibonacci,
  isNumeric,
  sortFrequency,
  generateFibonacciArray,
} = require("./utils");

const { alert } = require("./config");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let frequencyMap = new Map();
let globalTimer = null;
let haltFlag = false;
const fibonacciArray = generateFibonacciArray();

function displayFrequency() {
  const sortedFrequency = sortFrequency(frequencyMap);
  console.log("Frequency:");
  sortedFrequency.forEach(([num, freq]) => {
    console.log(`${num}: ${freq}`);
  });
}

function processInput(input, timer) {
  switch (input.toLowerCase()) {
    case "quit":
      displayFrequency();
      console.log("Goodbye!");
      rl.close();
      break;
    case "halt":
      timer.pause();
      console.log("Timer Paused.");
      break;
    case "display":
      displayFrequency();
      break;
    case "resume":
      timer.resume();
      console.log("Timer resumed.");
      break;
    default:
      if (!isNumeric(input)) {
        console.log(
          "Invalid input. Please enter a number, 'halt', 'resume','display' or 'quit'."
        );
        break;
      }
      const num = BigInt(input);
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      if (isFibonacci(num, fibonacciArray)) console.log(alert);
      console.log("Please enter the next number");
      break;
  }
}

function startTimer(interval) {
  globalTimer = pauseable.setInterval(interval * 1000, () => {
    displayFrequency();
  });
}

rl.question(
  "Enter the number of seconds between each output: ",
  (intervalStr) => {
    const interval = parseInt(intervalStr);
    if (isNaN(interval) || interval <= 0) {
      console.log("Invalid interval. Please enter a positive number.");
      rl.close();
    } else {
      startTimer(interval);
      console.log(
        `Timer started. Frequency will be displayed every ${interval} seconds.`
      );
      console.log("Please enter the first number");
      rl.on("line", (input) => {
        processInput(input, globalTimer);
      });
    }
  },
);

rl.on("close", () => {
  if(globalTimer) globalTimer.clear();
});

module.exports = {
  displayFrequency,
  processInput,
};
