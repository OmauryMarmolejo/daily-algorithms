// Simple linear scan of sequence

// Algorithm description

// 1. Initialize a variable to keep track of the previous element (usually the first element in the sequence).
// 2. Iterate through the sequence, starting from the second element (index 1).
// 3. Compare the current element with the previous element. If the current element is less than or equal to the previos element, then return false.
// 4. Update the previous element with the current element for the next iteration.
// 5. If the loop completes without finding any non-strictly increasing elements, return true.

function isStrictlyIncreasing(sequence) {
  let prev = sequence[0];
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= prev) {
      return false;
    }
    prev = sequence[i];
  }
  return true;
}
