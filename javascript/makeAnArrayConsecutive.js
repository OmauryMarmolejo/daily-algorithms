// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues) {
  if (statues.length === 1) {
    return 0;
  }

  const sortedStatues = [...statues].sort((a, b) => a - b);
  let requiredStatues = 0;

  for (i = 0; i < sortedStatues.length - 1; i++) {
    requiredStatues += sortedStatues[i + 1] - sortedStatues[i] - 1;
  }

  return requiredStatues;
}

function solution(sequence) {
  let modifications = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] <= sequence[i + 1]) {
      modifications++;
    }
  }

  return modifications <= 1;
}
