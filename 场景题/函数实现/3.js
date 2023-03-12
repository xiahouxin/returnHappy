/*
    需求:一个字符串中是否出现某串字符,出现的话返回索引
    */
~(function () {
  function find(target) {
    let j = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === target[j]) {
        j++;
        if (j == target.length) {
          return i + 1 - target.length;
        }
      } else {
        j = 0;
      }
    }
    return -1;
  }

  function myIndex(o) {
    for (let i = 0; i < this.length - o.length; i++) {
      if(this[i]==o[0]){
        let j = this.substr(i, o.length);
      if (o === j) {
        return i;
      }
      }
    }
    return -1;
  }
  String.prototype.find = find;
  String.prototype.myIndex = myIndex;
})();

console.log("12dasgsadgk".find("sadg"));
console.log("12dasgsadgk".myIndex("sa"));
