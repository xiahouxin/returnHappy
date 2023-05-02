// 利用数组的filter()+indexOf()

function removeDuplicate(arr) {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
  }
  
  const result = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined ]
  