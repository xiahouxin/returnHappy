const arr = [1, 2, 3, [4, [4], 5], [6, 7], 8]

// console.log(arr.flat());
// console.log(arr);

Array.prototype.my_flat = function() {
  let newArr = this
  while (newArr.some(item => Array.isArray(item))) {
    newArr = [].concat(...newArr)
    console.log(newArr);
  } // 1, 2, 3, [4, 5], [6, 7], 8
  // console.log(newArr);
  return newArr
}

console.log(arr.my_flat());
console.log(arr);


// Array.prototype.my_flat=function(){
//   let ans=this
//   while(ans.some(item=>Array.isArray(item))){
//     ans=[].concat(...ans)
//   }
//   return ans
// }