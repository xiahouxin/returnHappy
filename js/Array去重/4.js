// 利用数组的includes方法

function removeDuplicate(arr) {
    const newArr = []
    arr.forEach(item => {
      if (!newArr.includes(item)) {
        newArr.push(item)
      }
    })
    return newArr
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]
  