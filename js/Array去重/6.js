// 利用Map()

function removeDuplicate(arr) {
    const map = new Map()
    const newArr = []
  
    arr.forEach(item => {
      if (!map.has(item)) {
        map.set(item, true) 
        newArr.push(item)
      }
    })
  
    return newArr
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]
  