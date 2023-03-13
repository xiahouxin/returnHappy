//   for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }

//实现需求,上面那个每隔1s输出1,2,3,4,---9

// 111111111111111111111
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


// 2222222222222222
for (let i = 0; i < 10; i++) {
  setTimeout((i) => {
    console.log(i);
  }, 1000*i,i);
}


// 333333333333333


