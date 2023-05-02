// 利用对象

function removeDuplicate(arr) {
    const newArr = []
    const obj = {}
  
    arr.forEach(item => {
      if (!obj[item]) {
        newArr.push(item)
        obj[item] = true
      }
    })
  
    return newArr
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]
  