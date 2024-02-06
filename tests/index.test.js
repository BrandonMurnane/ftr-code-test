const readline = require("readline");
const { displayFrequency, processInput } = require(".././index");
const {
  sortFrequency,
  generateFibonacciArray,
  isNumeric,
  isFibonacci,
} = require(".././utils");

jest.mock("readline", () => ({
  createInterface: jest.fn(() => ({
    question: jest.fn(),
    on: jest.fn(),
    close: jest.fn(),
  })),
}));

jest.mock(".././utils", () => ({
  sortFrequency: jest.fn(),
  generateFibonacciArray: jest.fn(),
  isNumeric: jest.fn(),
  isFibonacci: jest.fn(),
}));
const mockSortedFrequency = [
  [1, 3],
  [2, 2],
  [3, 1],
];
sortFrequency.mockReturnValue(mockSortedFrequency);

describe("Display Frequency Function", () => {
  test("should display frequency map", () => {
    const logSpy = jest.spyOn(global.console, "log");
    displayFrequency();

    expect(sortFrequency).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Frequency:");
    expect(logSpy.mock.calls).toContainEqual(["1: 3"]);
    expect(logSpy.mock.calls).toContainEqual(["2: 2"]);
    expect(logSpy.mock.calls).toContainEqual(["3: 1"]);
  });
});

describe("Process Input Function", () => {
  let timerMock;

  beforeEach(() => {
    timerMock = {
      pause: jest.fn(),
      resume: jest.fn(),
      clear: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should pause the timer when input is "halt"', () => {
    processInput("halt", timerMock);
    expect(timerMock.pause).toHaveBeenCalled();
  });

  it('should pause the timer when input is "HALT"', () => {
    processInput("HALT", timerMock);
    expect(timerMock.pause).toHaveBeenCalled();
  });

  it('should resume the timer when input is "resume"', () => {
    processInput("resume", timerMock);
    expect(timerMock.resume).toHaveBeenCalled();
  });

  it('should resume the timer when input is "RESUME"', () => {
    processInput("RESUME", timerMock);
    expect(timerMock.resume).toHaveBeenCalled();
  });

  it("should give console log with error", () => {
    isNumeric.mockReturnValue(false);
    processInput("level", timerMock);
    const logSpy = jest.spyOn(global.console, "log");
    expect(isNumeric).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(
      "Invalid input. Please enter a number, 'halt', 'resume','display' or 'quit'.",
    );
  });

  it("should give fib", () => {
    isNumeric.mockReturnValue(true);
    isFibonacci.mockReturnValue(true);
    processInput("5", timerMock);
    const logSpy = jest.spyOn(global.console, "log");
    expect(isNumeric).toHaveBeenCalled();
    expect(isFibonacci).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("fib");
  });

  it("should call functions but not fib", () => {
    isNumeric.mockReturnValue(true);
    isFibonacci.mockReturnValue(false);
    processInput("6", timerMock);
    const logSpy = jest.spyOn(global.console, "log");
    expect(isNumeric).toHaveBeenCalled();
    expect(isFibonacci).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Please enter the next number");
  });
});
