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

// 方法一：深度优先搜索
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    } else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};
// 复杂度分析

// 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
// 空间复杂度：O(height)，其中 height 表示二叉树的高度。
// 递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。



// 方法二：广度优先搜索
function maxDepth(root) {
    if (root == null) {
        return 0;
    }
    let queue = new Array();
    queue.push(root);
    let ans = 0;
    while (!!queue.length) {
        let size = queue.length;
        while (size > 0) {
            let node = queue.shift();
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
            size--;
        }
        ans++;
    }
    return ans;
}
// 复杂度分析

// 时间复杂度：O(n)，其中 n 为二叉树的节点个数。与方法一同样的分析，每个节点只会被访问一次。
// 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)。