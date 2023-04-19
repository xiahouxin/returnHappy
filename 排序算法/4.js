// //快速排序
// function quickSort(arr, left, right) {
//   //获取枢纽
//   var len = arr.length,
//     partitionIndex,
//     left = typeof left != "number" ? 0 : left,
//     right = typeof right != "number" ? len - 1 : right;
//   if (left < right) {
//     partitionIndex = partition(arr, left, right);
//     quickSort(arr, left, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, right);
//   }
//   return arr;
// }
// //获取枢纽
// function partition(arr, left, right) {
//   //分区操作
//   var pivot = left, //设定基准值（pivot）
//     index = pivot + 1;
//   for (var i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, index);
//       index++;
//     }
//   }
//   swap(arr, pivot, index - 1);
//   return index - 1;
// }

// //交换
// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// 一个正确的快速排序需要的是3步
// 1.快速
// 2.获取基准
function quickSort(arr, left, right) {
  let len = arr.length,
    pivotIndex;
  //这边做个边界判断
  left = !left ? 0 : left;
  right = !right ? len - 1 : right;
  if (left < right) {
    pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  //分区操作;
  var pivot = left;
  index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
//3.交换两个
function swap(arr, left, right) {
  var temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
let arr = [123, 3, 24, 15, 2, 45, 1];
console.log(quickSort(arr));