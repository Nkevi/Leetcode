function subsets(nums: number[]): number[][] {
    let a: number = nums.length;
    let arr: number[][] = [];
    for (let m: number = 0; m < (1 << a); m++) {
        let t: number[] = [];
        for (let i: number = 0; i < a; i++) {
            if ( m & (1 << i)) {
                t.push(nums[i]);
            }
        }
        arr.push(t);
    }

    return arr;
};

function subsets2(nums: number[]): number[][] { 
  let arr: number[][] = [[]];

  for (let n of nums) {
    const newSubsets: number[][] = arr.map(subset => subset.concat(n));
    arr = arr.concat(newSubsets);
  }

  return arr;
}


