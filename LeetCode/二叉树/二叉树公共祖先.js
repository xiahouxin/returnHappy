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
// 以下是二叉树的左节点<根节点<右节点--------------------------------
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



// // 以下是二叉树节点没有大小之分--------------------------------


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
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left == null) return right;
    if(right == null) return left;
    return root;
    
    // if(root == null || root == p || root == q) return root;
    // let left = lowestCommonAncestor(root.left, p, q);
    // let right = lowestCommonAncestor(root.right, p, q);
    // if(left == null && right == null) return null; // 1.
    // if(left == null) return right; // 3.
    // if(right == null) return left; // 4.
    // return root; // 2. if(left != null and right != null)
};