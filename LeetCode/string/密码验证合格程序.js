const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    console.log(isQualify(line) ? 'OK' : 'NG')
});

function isQualify(str) {
    let [correct, count] = [0, 0]
    if (str.length < 9 || str.includes('\n') || str.includes(' ')) return false
    if (/[a-z]/.test(str)) {
        correct++
    }
    if (/[A-Z]/.test(str)) {
        correct++
    }
    if (/[0-9]/.test(str)) correct++
    if (/[^\u4e00-\u9fa5a-zA-Z\d,\.，。]+/.test(str)) correct++
    if (correct < 3) return false

    const obj = {}
    for (let i = 0; i < str.length; i++) {
        let substring = str.substring(i, i + 3)
        if (substring.length < 3) continue
        obj[substring] = null
        count++
    }
    return Object.keys(obj).length === count
}

