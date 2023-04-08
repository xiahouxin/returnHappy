// // //快速排序
let arr = [13, 24, 12, 3, 23, 9, 2];
// function quickSort(nums) {
//   //4.结束递归
//   if (nums.length <= 1) return nums;
//   //找到中间项移除并获取这一项的结果
//   let middleIndex = Math.floor(nums.length / 2);
//   let middleValue = nums.splice(middleIndex, 1)[0];
//   //2.准备左右两个数组,循环剩下数组汇总的每一项，比当前项小的放到左边数组中，反之放到右边数组中
//   let aryLeft = [],
//     aryRight = [];
//   for (let i = 0; i < nums.length; i++) {
//     let item = nums[i];
//     item < middleValue ? aryLeft.push(item) : aryRight.push(item);
//   }
//   //3.递归让左右两边数组持续这样处理直到左右都排好序为止
//   return quickSort(aryLeft).concat(middleValue, quickSort(aryRight));
// }
