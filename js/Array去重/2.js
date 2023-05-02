// 通过两层循环对数组元素进行逐一比较，然后通过splice方法来删除重复的元素。此方法对NaN是无法进行去重的，因为进行比较时NaN !== NaN

function removeDuplicate(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          len-- // 减少循环次数提高性能
          j-- // 保证j的值自加后不变
        }
      }
    }
    return arr
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN, NaN ]
  