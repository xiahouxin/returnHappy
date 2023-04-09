//拿出先拿出0号位循环比较
// function selectSort(nums) {
//   var length = nums.length;
//   for (let i = 0; i < length - 1; i++) {
//     var min = i;
//     for (let j = min; j < nums.length; j++) {
//       if (nums[j] < nums[min]) {
//         var temp = nums[j];
//         nums[j] = nums[min];
//         nums[min] = temp;
//       }
//     }
//   }
//   return nums;
// }
// function selectSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = min; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         [arr[j], arr[min]] = [arr[min], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = min; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        [arr[j], arr[min]] = [arr[min], arr[j]];
      }
    }
  }
  return arr;
}
console.log(selectSort([1, 3, 5, 2, 41, 0]));
