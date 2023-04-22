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
// 前序遍历
var preorderTraversal = function(root) {
    let res=new Array();
    if(root==null) return res;
    let stack=new Array();
    stack.push(root);
    while(!!stack.length){
        let cur=stack.pop();
        res.push(cur.val);
        if(cur.right!=null){
            stack.push(cur.right);
        }
        if(cur.left!=null){
            stack.push(cur.left);
        }
    }
    return res;
};


//中序遍历
function inOrderIteration(head) {
	if (head == null) {
		return;
	}
	let cur = head;
    let res=[]
	let stack = new Array();
	while (!!stack.length || cur != null) {
		while (cur != null) {
			stack.push(cur);
			cur = cur.left;
		}
		let node = stack.pop();
		res.push(node.val)
		if (node.right != null) {
			cur = node.right;
		}
	}
    return res
}

// 后序遍历
function postOrderIteration2(head) { 
	if (head == null) {
		return;
	}
	let cur = head;
	let stack = new Array();
	stack.push(head);
	while (!!stack.length) {
		let peek = stack.peek();
		if (peek.left != null && peek.left != cur && peek.right != cur) {
			stack.push(peek.left);
		} else if (peek.right != null && peek.right != cur) {
			stack.push(peek.right);
		} else {
			System.out.print(stack.pop().val + " ");
			cur = peek;
		}
	}
}