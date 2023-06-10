// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
// 假设二叉树中至少有一个节点。

// 示例 1:
// 输入: root = [2,1,3]
// 输出: 1


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// dfs
var findBottomLeftValue = function (root) {
    let maxPath = 0, resultVal = null
    const dfsTree = function (node, curPath) {
        if (node.left == null && node.right == null) {
            if (curPath > maxPath) {
                maxPath = curPath
                resultVal = node.val
            }
            return
        }
        node.left && dfsTree(node.left, curPath + 1)
        node.right && dfsTree(node.right, curPath + 1)
    }
    dfsTree(root, 1)
    return resultVal
};


// bfs
var findBottomLeftValue = function (root) {
    let ret = 0;
    const queue = [root];
    while (queue.length) {
        const p = queue.shift();
        if (p.right) {
            queue.push(p.right);
        }
        if (p.left) {
            queue.push(p.left);
        }
        ret = p.val;
    }
    return ret;
};