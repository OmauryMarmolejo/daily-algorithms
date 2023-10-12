// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
  let maxSize = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((x) => x.length === maxSize);
}
