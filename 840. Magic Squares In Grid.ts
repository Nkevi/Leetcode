function numMagicSquaresInside(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  let count = 0;

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      if (isMagic(grid, i, j)) {
        count++;
      }
    }
  }

  return count;
}

function isMagic(grid: number[][], row: number, col: number): boolean {
  const nums: Set<number> = new Set();

  // 检查数字是否是1~9且互不重复
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = grid[row + i][col + j];
      if (num < 1 || num > 9 || nums.has(num)) {
        return false;
      }
      nums.add(num);
    }
  }

  // 检查中心元素是否是5
  if (grid[row + 1][col + 1] !== 5) {
    return false;
  }

  // 检查每一行的和是否为15
  for (let i = 0; i < 3; i++) {
    const rowSum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2];
    if (rowSum !== 15) {
      return false;
    }
  }

  // 检查每一列的和是否为15
  for (let j = 0; j < 3; j++) {
    const colSum = grid[row][col + j] + grid[row + 1][col + j] + grid[row + 2][col + j];
    if (colSum !== 15) {
      return false;
    }
  }

  // 检查两条对角线
  const diag1 = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
  const diag2 = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col];

  if (diag1 !== 15 || diag2 !== 15) {
    return false;
  }

  return true;
}
