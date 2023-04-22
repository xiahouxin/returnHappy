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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res=new Array();
    if(root==null){
        return res;
    }
    let stack=[];
    while(root!=null||stack.length>0){
        if(root!=null){
            stack.push(root);
            root=root.left;
        }else{
            let cn=stack.pop();
            res.push(cn.val);
            root=cn.right;
        }
    }
    return res;
};