// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = new Array(n + 1).fill(1)
    let p2 = 1, p3 = 1, p5 = 1
    for (let i = 2; i <= n; i++) {
        let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5
        dp[i] = Math.min(num5, Math.min(num2, num3))
        if (dp[i] == num2) {
            p2++
        }
        if (dp[i] == num3) {
            p3++
        }
        if (dp[i] == num5) {
            p5++
        }
    }
    return dp[n]
};