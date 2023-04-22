function postorderTraversal(root) {
    let res = new Array();
    postorder(root, res);
    return res;
}

function postorder(root, res) {
    if (root == null) {
        return;
    }
    postorder(root.left, res);
    postorder(root.right, res);
    res.add(root.val);
}



function method1(root) {
    let ans=new Array();
    let stack=new Array();
    let prev=null;
    //主要思想：
    //由于在某颗子树访问完成以后，接着就要回溯到其父节点去
    //因此可以用prev来记录访问历史，在回溯到父节点时，可以由此来判断，上一个访问的节点是否为右子树
    while(root!=null||!stack.isEmpty()){
        while(root!=null){
            stack.push(root);
            root=root.left;
        }
        //从栈中弹出的元素，左子树一定是访问完了的
        root=stack.pop();
        //现在需要确定的是是否有右子树，或者右子树是否访问过
        //如果没有右子树，或者右子树访问完了，也就是上一个访问的节点是右子节点时
        //说明可以访问当前节点
        if(root.right==null||prev==root.right){
            ans.push(root.val);
            //更新历史访问记录，这样回溯的时候父节点可以由此判断右子树是否访问完成
            prev=root;
            root=null;
        }else{
        //如果右子树没有被访问，那么将当前节点压栈，访问右子树
            stack.push(root);
            root=root.right;
        }
    }
    return ans;
}