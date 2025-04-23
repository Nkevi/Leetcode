function isPathCrossing(path: string): boolean {
  const visited = new Set<string>(); // 用于存储访问过的坐标
  let x = 0; // 当前横坐标
  let y = 0; // 当前纵坐标
  visited.add(`${x},${y}`); // 添加起点坐标

  for (const direction of path) {
    switch (direction) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "W":
        x--;
        break;
    }
    const pos = `${x},${y}`;
    if (visited.has(pos)) {
      return true; // 如果当前坐标已经访问过，返回 true
    }
    visited.add(pos); // 添加当前坐标到访问集合
  }

  return false; // 如果没有交叉，返回 false
}
