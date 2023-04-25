// 序列化二叉树的一种方法是使用 前序遍历 。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #
// 输入: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
// 输出: true

// https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/solutions/650946/shou-hua-tu-jie-cong-ling-yi-ge-jiao-du-2rnzg/

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    if (preorder == "#") { // 特例
        return true
    }
    let indegree = 0, outdegree = 0 // 初始 入度出度
    const nodes = preorder.split(",") // 转成数组

    for (let i = 0; i < nodes.length; i++) { // 遍历数组
        if (i == 0) { // 根节点
            if (nodes[i] == "#") { // #,#,1 这样的 是非法的
                return false
            }
            outdegree += 2 // 根节点  出度+2
            continue
        }
        if (nodes[i] == "#") { // null节点，入度+1
            indegree += 1
        } else {               // 非空节点 入度+1 出度+2
            indegree += 1
            outdegree += 2
        }
        if (i != nodes.length - 1 && indegree >= outdegree) {
            return false//一直保持indegree<outdegree，直到最后才indegree==outdegree，做不到就false
        }
    }
    return indegree == outdegree // 最后肯定入度==出度
};


// 优化
function isValidSerialization(preorder) {
    if ("#"==preorder) {
        return true;
    }
    let split = preorder.split(",");
    let outDegree = 0;
    let idx = 0;
    while (idx < split.length) {
        let c = split[idx];
        if ("#"==c) {
            outDegree--;
        } else {
            outDegree += idx == 0 ? 2 : 1;
        }
        if (idx < split.length - 1 && outDegree <= 0) {
            return false;
        }
        idx++;
    }
    return outDegree == 0;
}