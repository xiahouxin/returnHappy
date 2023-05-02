// 利用Map()

function removeDuplicate(arr) {
    const map = new Map()
    const newArr = []
  
    arr.forEach(item => {
      if (!map.has(item)) { // has()用于判断map是否包为item的属性值
        map.set(item, true) // 使用set()将item设置到map中，并设置其属性值为true
        newArr.push(item)
      }
    })
  
    return newArr
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]
  