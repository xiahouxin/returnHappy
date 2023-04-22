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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = new Array();
    let queue = new Array();
    if (root != null) {
        queue.push(root);
    }
    while (!!queue.length) {
        let leve = new Array();
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let pre = queue.shift();
            leve.push(pre.val);
            if (pre.left != null) {
                queue.push(pre.left);
            }
            if (pre.right != null) {
                queue.push(pre.right);
            }
        }
        res.push(leve);
    }
    return res;
};

