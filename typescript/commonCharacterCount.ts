// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1: string, s2: string): number {
  let array_s1: string[] = s1.split("");
  let array_s2: string[] = s2.split("");

  let count: number = 0;

  for (const letter of array_s1) {
    const index: number = array_s2.indexOf(letter);

    if (index !== -1) {
      count += 1;
      array_s2[index] = "";
    }
  }

  return count;
}
