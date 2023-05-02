// 利用数组的indexOf方法

function removeDuplicate(arr) {
    const newArr = []
    arr.forEach(item => {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item)
      }
    })
    return newArr // 返回一个新数组
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN, NaN ]
  
