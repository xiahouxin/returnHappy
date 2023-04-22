/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
var lowestCommonAncestor = function (root, p, q) {
    if (root.val < p.val && root.val < q.val)
        return lowestCommonAncestor(root.right, p, q);
    if (root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q);
    return root;
};

// 迭代
function lowestCommonAncestor( root,  p,  q) {
    if(p.val > q.val) { // 保证 p.val < q.val
        let tmp = p;
        p = q;
        q = tmp;
    }
    while(root != null) {
        if(root.val < p.val) // p,q 都在 root 的右子树中
            root = root.right; // 遍历至右子节点
        else if(root.val > q.val) // p,q 都在 root 的左子树中
            root = root.left; // 遍历至左子节点
        else break;
    }
    return root;
}