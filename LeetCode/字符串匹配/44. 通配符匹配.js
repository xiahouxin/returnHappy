/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let m = s.length, n = p.length;
    let f = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        f[i] = new Array(n + 1).fill(false)
    }
    f[0][0] = true;
    for (let i = 1; i <= n; i++) {
        f[0][i] = f[0][i - 1] && p.charAt(i - 1) == '*';
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '?') {
                f[i][j] = f[i - 1][j - 1];
            }
            if (p.charAt(j - 1) == '*') {
                f[i][j] = f[i - 1][j] || f[i][j - 1];
            }
        }
    }
    return f[m][n];
};