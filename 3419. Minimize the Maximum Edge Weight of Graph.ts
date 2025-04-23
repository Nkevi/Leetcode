function dfs(i: number, m: number, ral: Array<Array<[number, number]>>, vis: boolean[]): number {
  let res = 1; // 当前节点被访问
  vis[i] = true; // 标记当前节点为已访问

  // 遍历当前节点的所有邻接节点
  for (const [j, w] of ral[i]) {
    if (w <= m && !vis[j]) {
      res += dfs(j, m, ral, vis); // 递归访问未访问的节点
    }
  }

  return res; // 返回访问的节点数
}

function minMaxWeight(n: number, edges: number[][], threshold: number): number {
  // 构建反向邻接表
  const ral: Array<Array<[number, number]>> = new Array(n).fill(0).map(() => []);
  for (const [u, v, w] of edges) {
    ral[v].push([u, w]); // 反向存储边
  }

  // 二分查找的范围：最小边权为 1，最大边权为 1000000
  let l = 1;
  let r = 1000001;

  while (l < r) {
    const m = Math.floor((l + r) / 2); // 中间值
    const vis: boolean[] = new Array(n).fill(false); // 访问标记数组

    // 检查是否所有节点都可以到达节点 0
    if (dfs(0, m, ral, vis) === n) {
      r = m; // 满足条件，尝试更小的边权
    } else {
      l = m + 1; // 不满足条件，尝试更大的边权
    }
  }

  // 如果 l 超出范围，返回 -1；否则返回 l
  return l === 1000001 ? -1 : l;
}
