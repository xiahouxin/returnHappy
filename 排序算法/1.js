let arr = [13, 24, 12, 3, 23, 9, 2];
// function insertSort(arr) {
//   let len = arr.length;
//   let preIndex, currentValue;
//   for (let i = 1; i < len; i++) {
//     preIndex = i - 1;
//     currentValue = arr[i];
//     while (preIndex >= 0 && arr[preIndex] > currentValue) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//     }
//     arr[preIndex + 1] = currentValue;
//   }
//   return arr;
// }

//[13, 24, 12, 3, 23, 9, 2];
function insertSort(arr) {
  let len = arr.length;
  let preIndex, currentValue;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    currentValue = arr[i];
    // console.log(arr[preIndex], currentValue);
    while (preIndex >= 0 && arr[preIndex] > currentValue) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = currentValue;
  }
  return arr;
}
console.log(insertSort(arr));
