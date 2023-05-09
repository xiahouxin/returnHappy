/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  let res = new Array();
  /*如果只有一个节点，那么他就是最小高度树*/
  if (n == 1) {
    res.push(0);
    return res;
  }
  /*建立各个节点的出度表*/
  let degree = new Array(n).fill(0);
  /*建立图关系，在每个节点的list中存储相连节点*/
  let map = new Array();
  for (let i = 0; i < n; i++) {
    map.push(new Array());
  }
  for (let edge of edges) {
    degree[edge[0]]++;
    degree[edge[1]]++; //出度++
    map[edge[0]].push(edge[1]); /*添加相邻节点*/
    map[edge[1]].push(edge[0]);
  }
  /*建立队列*/
  let queue = new Array();
  /*把所有出度为1的节点，也就是叶子节点入队*/
  for (let i = 0; i < n; i++) {
    if (degree[i] == 1) queue.push(i);
  }
  /*循环条件当然是经典的不空判断*/
  while (queue.length) {
    res = new Array(); /*这个地方注意，我们每层循环都要new一个新的结果集合，这样最后保存的就是最终的最小高度树了*/
    let size = queue.length; /*这是每一层的节点的数量*/
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      res.push(cur); /*把当前节点加入结果集，不要有疑问，为什么当前只是叶子节点为什么要加入结果集呢?
                        因为我们每次循环都会新建一个list，所以最后保存的就是最后一个状态下的叶子节点，
                        这也是很多题解里面所说的剪掉叶子节点的部分，你可以想象一下图，每层遍历完，
                        都会把该层（也就是叶子节点层）这一层从队列中移除掉，
                        不就相当于把原来的图给剪掉一圈叶子节点，形成一个缩小的新的图吗*/
      let neighbors = map[cur];
      /*这里就是经典的bfs了，把当前节点的相邻接点都拿出来，
       * 把它们的出度都减1，因为当前节点已经不存在了，所以，
       * 它的相邻节点们就有可能变成叶子节点*/
      for (let neighbor of neighbors) {
        degree[neighbor]--;
        if (degree[neighbor] == 1) {
          /*如果是叶子节点我们就入队*/
          queue.push(neighbor);
        }
      }
    }
  }
  return res; /*返回最后一次保存的list*/
}