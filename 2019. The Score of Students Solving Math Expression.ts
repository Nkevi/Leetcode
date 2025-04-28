function scoreOfStudents(s: string, answers: number[]): number {
  const nums = s.split(/[\+\*]/).map(Number);
  const ops = s.split(/\d/).filter(Boolean);

  const calc = (nums: number[], ops: string[]): number => {
    let n = [...nums],
      o = [...ops];
    for (let i = 0; i < o.length; ) {
      if (o[i] === "*") {
        n.splice(i, 2, n[i] * n[i + 1]);
        o.splice(i, 1);
      } else i++;
    }
    return n.reduce((a, b) => a + b, 0);
  };

  const correct = calc(nums, ops);

  const memo = new Map<string, Set<number>>();

  const dfs = (l: number, r: number): Set<number> => {
    const key = `${l},${r}`;
    if (memo.has(key)) return memo.get(key)!;
    const res = new Set<number>();
    if (l === r) {
      res.add(nums[l]);
    } else {
      for (let i = l; i < r; i++) {
        const left = dfs(l, i);
        const right = dfs(i + 1, r);
        for (const a of left)
          for (const b of right) {
            const val = ops[i] === "+" ? a + b : a * b;
            if (val <= 1000) res.add(val);
          }
      }
    }
    memo.set(key, res);
    return res;
  };

  const allPossible = dfs(0, nums.length - 1);

  let score = 0;
  for (const ans of answers) {
    if (ans === correct) score += 5;
    else if (allPossible.has(ans)) score += 2;
  }
  return score;
}
