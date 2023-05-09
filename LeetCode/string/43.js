/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 == "0" || num2 == "0") {
        return "0";
    }
    let res = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        let n1 = parseInt(num1[i]);
        for (let j = num2.length - 1; j >= 0; j--) {
            let n2 = parseInt(num2[j]);
            let sum = (res[i + j + 1] + n1 * n2);
            res[i + j + 1] = sum % 10;
            res[i + j] += ~~(sum / 10);
        }
    }

    let result = "";
    for (let i = 0; i < res.length; i++) {
        console.log(res[i], i);
        if (i == 0 && res[i] == 0) continue;
        result += res[i]
    }
    return result;
};
console.log(multiply('2', '3'));