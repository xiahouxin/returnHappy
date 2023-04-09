// ####插入排序
function mySort(nums) {
  let len = nums.length;
  // 循环不变量：将 nums[i] 插入到区间 [0, i) 使之成为有序数组
  for (let i = 1; i < len; i++) {
    // 先暂存这个元素，然后之前元素逐个后移，留出空位
    let temp = nums[i];
    let j = i;
    // 注意边界 j > 0
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
  return nums;
}

// #####快速排序

// 快速排序 3：三指针快速排序

/**
 * 列表大小等于或小于该大小，将优先于 quickSort 使用插入排序
 */
const INSERTION_SORT_THRESHOLD = 7;

const RANDOM = Math.random();

const sortArray = function (nums) {
  let len = nums.length;
  quickSort(nums, 0, len - 1);
  return nums;
};

const quickSort = function (nums, left, right) {
  // 小区间使用插入排序
  if (right - left <= INSERTION_SORT_THRESHOLD) {
    insertionSort(nums, left, right);
    return;
  }
  // console.log('-----');
  let randomIndex = Math.floor(left + RANDOM * (right - left + 1)); //随机选一个作为我们的主元
  swap(nums, randomIndex, left);

  // 循环不变量：
  // all in [left + 1, lt] < pivot
  // all in [lt + 1, i) = pivot
  // all in [gt, right] > pivot
  let pivot = nums[left];
  let lt = left;
  let gt = right + 1;

  let i = left + 1;
  while (i < gt) {
    if (nums[i] < pivot) {
      lt++;
      swap(nums, i, lt);
      i++;
    } else if (nums[i] == pivot) {
      i++;
    } else {
      gt--;
      swap(nums, i, gt);
    }
  }
  swap(nums, left, lt);
  // 注意这里，大大减少了两侧分治的区间
  quickSort(nums, left, lt - 1);
  quickSort(nums, gt, right);
};

/**
 * 对数组 nums 的子区间 [left, right] 使用插入排序
 *
 * @param nums  给定数组
 * @param left  左边界，能取到
 * @param right 右边界，能取到
 */
const insertionSort = function (nums, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = nums[i];
    let j = i;
    while (j > left && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
};

const swap = function (nums, index1, index2) {
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
};
// console.log(Math.random());
// console.log(Math.floor(Math.random()*8));
let nums = [1, 8, 6, 9, 12, 2, 4, 8, 5, 4, 6, 3, 23, 5];
console.log(sortArray(nums));
