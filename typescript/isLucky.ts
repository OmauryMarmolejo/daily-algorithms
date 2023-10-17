function solution(n: number): boolean {
  const numberArray: number[] = Array.from(String(n), Number);

  const middleIndex: number = Math.floor(numberArray.length / 2);

  const firstArray: number[] = numberArray.slice(0, middleIndex);
  const secondArray: number[] = numberArray.slice(middleIndex);

  const firstArraySum: number = sumArray(firstArray);
  const secondArraySum: number = sumArray(secondArray);

  return firstArraySum === secondArraySum;
}

function sumArray(array: number[]): number {
  return array.reduce((accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
  }, 0);
}
