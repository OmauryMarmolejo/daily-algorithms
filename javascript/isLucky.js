function solution(n) {
  numberArray = Array.from(String(n), Number);

  const middleIndex = Math.floor(numberArray.length / 2);

  const firstArray = numberArray.slice(0, middleIndex);
  const secondArray = numberArray.slice(middleIndex);

  const firstArraySum = sumArray(firstArray);
  const secondArraySum = sumArray(secondArray);

  return firstArraySum === secondArraySum;
}

function sumArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
