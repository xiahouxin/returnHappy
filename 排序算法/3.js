function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    return arr;
  }
  // function sort(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 0; j < arr.length - i - 1; j++) {
  //       if (arr[j + 1] < arr[j]) {
  //         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
  //       }
  //     }
  //   }
  //   return arr;
  // }
  console.log(sort([1, 3, 5, 2, 41, 0]));