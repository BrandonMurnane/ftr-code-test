const {
  isFibonacci,
  isNumeric,
  sortFrequency,
  generateFibonacciArray,
} = require(".././utils");

describe("isFibonacci", () => {
  const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  test("should return true for Fibonacci numbers", () => {
    expect(isFibonacci(0, fibonacciArray)).toBe(true);
    expect(isFibonacci(5, fibonacciArray)).toBe(true);
    expect(isFibonacci(21, fibonacciArray)).toBe(true);
  });

  test("should return false for non-Fibonacci numbers", () => {
    expect(isFibonacci(4, fibonacciArray)).toBe(false);
    expect(isFibonacci(10, fibonacciArray)).toBe(false);
    expect(isFibonacci(25, fibonacciArray)).toBe(false);
  });
});

describe("isNumeric", () => {
  test("should return true for numeric strings", () => {
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("0")).toBe(true);
  });

  test("should return false for non-numeric strings", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric("1.23")).toBe(false);
    expect(isNumeric("1e5")).toBe(false);
  });
});

describe("sortFrequency", () => {
  const frequencyMap = new Map([
    [2, 2],
    [1, 3],
    [3, 1],
  ]);

  test("should sort frequency map by value in descending order", () => {
    expect(sortFrequency(frequencyMap)).toEqual([
      [1, 3],
      [2, 2],
      [3, 1],
    ]);
  });
});

describe("generateFibonacciArray", () => {
  test("should generate Fibonacci array up to a given maxFib value", () => {
    const expectedArray = [0n, 1n, 1n, 2n, 3n]; //max fib set to 5 for test
    const result = generateFibonacciArray();
    expect(result).toEqual(expectedArray);
  });
});
