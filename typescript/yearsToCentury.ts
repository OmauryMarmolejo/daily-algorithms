function solution(year: number): number {
  const decimalYears: number = year / 100;
  const century: number = Math.ceil(decimalYears);

  return century;
}
