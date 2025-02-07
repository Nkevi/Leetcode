function generateMatrix(n: number): number[][] {
  let l = 0,
    t = 0,
    r = n - 1,
    b = n - 1;
  const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;

  while (num <= n * n) {
    for (let i = l; i <= r; i++) {
      matrix[t][i] = num++;
    }
    t++;
    for (let i = t; i <= b; i++) {
      matrix[i][r] = num++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      matrix[b][i] = num++;
    }
    b--;
    for (let i = b; i >= t; i--) {
      matrix[i][l] = num++;
    }
    l++;
  }

  return matrix;
};