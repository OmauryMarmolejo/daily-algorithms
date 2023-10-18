function solution(a: number[]): number[] {
  const sortedHeights: number[] = a
    .filter((element: number) => element !== -1)
    .sort((a: number, b: number) => a - b);

  return a.map((element: number): number => {
    return element === -1 ? element : sortedHeights.shift()!;
  });
}
