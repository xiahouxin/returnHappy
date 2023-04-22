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
function minDepth(root) {
    if(root == null) return 0;
    //这道题递归条件里分为三种情况
    //1.左孩子和有孩子都为空的情况，说明到达了叶子节点，直接返回1即可
    if(root.left == null && root.right == null) return 1;
    //2.如果左孩子和由孩子其中一个为空，那么需要返回比较大的那个孩子的深度        
    let m1 = minDepth(root.left);
    let m2 = minDepth(root.right);
    //这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回m1 + m2 + 1;
    if(root.left == null || root.right == null) return m1 + m2 + 1;
    
    //3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
    return Math.min(m1,m2) + 1; 
}
// 上面的优化
var minDepth = function(root) {
    if(root==null){
        return 0;
    }
    let left=minDepth(root.left);
    let right=minDepth(root.right);
    return root.left==null||root.right==null ? left+right+1 : Math.min(left,right)+1;
};

// 复杂度分析

// 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。

// 空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。
// 平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log⁡N)。
