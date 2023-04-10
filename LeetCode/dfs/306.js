/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const n = num.length;
    const list=[]
    return dfs(0,num,n,list);
}
function dfs(u,num,n,list) {
    let m = list.length;
    if (u == n) return m >= 3;
    let max = num.charAt(u) == '0' ? u + 1 : n;
    let cur = [];
    for (let i = u; i < max; i++) {
        cur.push(parseInt(num.charAt(i)));
        console.log(cur,'cur');
        if (m < 2 || check(list[m - 2], list[m - 1], cur)) {
            list.push(cur);
            console.log(list,'list');
            if (dfs(i + 1,num,n,list)) return true;
            list.pop();
        }
    }
    return false;
}
function check(a, b, c) {
    let ans =[];
    let t = 0;
    let m=a.length-1,n=b.length-1
    while(m>=0||n>=0){
        if (m >= 0) t += a[m];
        if (n >= 0) t += b[n];
        ans.push(t % 10);
        t=Math.floor(t/10);
        m--
        n--
    }
    if (t > 0) ans.push(t);
    ans.reverse()
    let ok = c.length == ans.length;
    for (let i = 0; i < c.length && ok; i++) {
        if (c[i] != ans[i]) return false;
    }
    return ok;
}
console.log(isAdditiveNumber("199100199"));