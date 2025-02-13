function closestDivisors(num: number): number[] {
  let base = [num + 1, num + 2];

  function getDivisors(nums: number[]) {
    let size = nums.length;
    let divisors = [0, Number.MAX_SAFE_INTEGER];

    for (const num of nums) {
      let preDiff = Math.abs(divisors[0] - divisors[1]);
      for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
        if (!(num % i)) {
          if (Math.abs(i - num / i) < preDiff) {
            divisors[0] = i;
            divisors[1] = num / i;
          }
          break;
        }
      }
    }

    return divisors;
  }

  return getDivisors(base);
}
