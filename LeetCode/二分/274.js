/**
 * @param {number[]} citations
 * @return {number}
 */
// 有问题
var hIndex = function(citations) {
    let n = citations.length;
    let l = -1, r = n;
    function check(cs,mid) {
        let ans = 0;
        for (let i of cs) if (i >= mid) ans++;
        return ans >= mid;
    }
    while (l+1!=r) {
        let mid =Math.floor((l+r)/2);
        if (check(citations, mid)) l = mid;
        else r = mid;
    }
    return l;
};
