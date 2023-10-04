// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

function solution(inputArray: number[]): number | undefined {
  const products: number[] = [];
  for (let i: number = 0; i < inputArray.length - 1; i++) {
    products.push(inputArray[i] * inputArray[i + 1]);
  }

  const sortedProducts: number[] = products.sort((a, b) => b - a);

  return sortedProducts[0];
}
