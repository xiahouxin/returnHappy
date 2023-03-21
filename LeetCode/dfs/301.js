/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const n = s.length;
  // 记录最大有效括号数量
  let count = 0;
  let l = 0;
  // 存在重复字符形式
  const set = new Set();
  for (let c of s) {
    if (c == "(") {
      l++;
    } else if (c == ")" && l > 0) {
      l--;
      count++;
    }
  }
  const dfs = (i, l, r, str) => {
    // 数量关系，剪枝
    if (l < r || l > count || r > count) return;
    // 结束
    if (i == n) {
      // 数量相同，删除最小
      if (l == count && r == count) {
        set.add(str);
      }
      return;
    }
    const cur = s[i];
    if (cur == "(") {
      // 括号，选或不选
      dfs(i + 1, l + 1, r, str + "(");
      dfs(i + 1, l, r, str);
    } else if (cur == ")") {
      dfs(i + 1, l, r + 1, str + ")");
      dfs(i + 1, l, r, str);
    } else {
      // 字符直接加入
      dfs(i + 1, l, r, str + cur);
    }
  };
  dfs(0, 0, 0, "");
  return [...set];
};
