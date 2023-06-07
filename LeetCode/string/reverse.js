// 翻转字符串
// 递归
var line = readline();
var reverse = (str) => {
    if (str.length < 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse(line))

// 双指针
var line = readline();
var reverse = (str) => {
    if (str.length < 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse(line))


