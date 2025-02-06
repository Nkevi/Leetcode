function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ans: number[][] = [];
    const t: number[] = [];

    function dfs(choosePre: boolean, cur: number) {
        if (cur === nums.length) {
            ans.push([...t]);
            return;
        }
        dfs(false, cur + 1);
        if (!choosePre && cur > 0 && nums[cur] === nums[cur - 1]) {
            return;
        }
        t.push(nums[cur]);
        dfs(true, cur + 1);
        t.pop();
    }

    dfs(false, 0);
    return ans;
}