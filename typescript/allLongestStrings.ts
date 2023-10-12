// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray: string[]): string[] {
  let maxSize: number = Math.max(
    ...inputArray.map((currentString) => currentString.length)
  );
  return inputArray.filter((currentString) => currentString.length === maxSize);
}
