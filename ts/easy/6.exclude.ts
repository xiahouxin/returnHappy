type MyExclude<T, U> = T extends U ? never : T;

type t11 = MyExclude<string | number | boolean, number>;

//知识点,利用T的分布式原理进行比较
1;
function excludeInArr(array, excludeItem) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    const t = array[i];
    let boo = false;
    for (let j = 0; j < excludeItem.length; j++) {
      const u = excludeItem[j];
      if (t === u) {
        boo = true;
      }
    }
    if (!boo) {
      arr.push(t);
    }
  }
  return arr;
}
