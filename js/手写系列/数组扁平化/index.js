// // 数组扁平化
// function flatten(arr) {
//     return arr.reduce((result, item) => {
//       return result.concat(Array.isArray(item) ? flatten(item) : item);
//     }, []);
//   }
//   let arr=[1,[2,2],[3,4,[5,6]]]
//   console.log(flatten(arr));

//  concat不会改变现有数组，而是返回一个新数组
  function flatArray(arr){
    return arr.reduce((pre,item,index,arr)=>{
      return pre.concat(Array.isArray(item) ? flatArray(item) : item)
      // if(Array.isArray(item)){
      //   pre.concat(flatArray(item))
      // }else{
      //   pre.push(item)
      // }
      // console.log(pre,index,arr);
      // return pre
    },[])
  }
  let array=[1,[2,3,[4,5]],6,[7]]
  console.log(flatArray(array));

// console.log([1,2,3].concat([2,3,4,[5,[6]]]));
  