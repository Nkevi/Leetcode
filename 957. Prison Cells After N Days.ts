function prisonAfterNDays(cells: number[], n: number): number[] {
  let copyCells = cells.slice();
  cells[0] = cells[7] = 0;

  // The array repeats for every 14 times calculation.
  while (n >= 14) {
    n = n % 14;
  }

  // Though n is 0, we still need to run a cycle
  const cycle = n === 0 ? 14 : n;

  for (let i = 1; i <= cycle; i++) {
    for (let j = 1; j < cells.length - 1; j++) {
      cells[j] = +!(copyCells[j - 1] ^ copyCells[j + 1]);
    }
    copyCells = cells.slice();
  }

  return cells;
}
