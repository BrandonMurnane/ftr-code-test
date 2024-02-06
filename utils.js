const { maxFib } = require("./config");

function isFibonacci(num, fibonacciArray) {
    return fibonacciArray.includes(num);
}

function isNumeric(str) {
    return /^\d+$/.test(str);
}

function sortFrequency(frequencyMap) {
    return Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
}

function generateFibonacciArray() {
    let fibonacciArray = [];
    let a = BigInt(0);
    let b = BigInt(1);
    let i = 1;
    while (i <= maxFib) {
        fibonacciArray.push(a);
        let temp = a + b;
        a = b;
        b = temp;
        i++;
    }
    return fibonacciArray;
}

module.exports = {
    isFibonacci,
    isNumeric,
    sortFrequency,
    generateFibonacciArray,
};
