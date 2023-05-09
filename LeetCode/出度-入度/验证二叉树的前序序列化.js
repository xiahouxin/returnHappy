/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
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
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
console.log(isValidSerialization("9,#,#,1"));