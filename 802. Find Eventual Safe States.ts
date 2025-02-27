function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;
    const color = new Array(n).fill(0);
    const ans = [];
    for (let i = 0; i < n; ++i) {
        if (safe(graph, color, i)) {
            ans.push(i);
        }
    }
    return ans;
}

function safe(graph: number[][], color: number[], x: number): boolean {
    if (color[x] > 0) {
        return color[x] === 2;
    }
    color[x] = 1;
    for (const y of graph[x]) {
        if (!safe(graph, color, y)) {
            return false;
        }
    }
    color[x] = 2;
    return true;
}
