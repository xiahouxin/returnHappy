//输入一个数组选择k步
//[1,2,3,4,5,6,7] k=3 => [5,6,7,1,2,3,4]

/* 
  选择数组k步 —— 使用unshift
  @param arr arr
  @param k k
*/
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length == 0) {
    return arr;
  }
  const step = Math.abs(k % length);
  //O(n)
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n) {
      arr.unshift(n);
    }
  }
  return arr;
}
// console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));

/* 
  选择数组k步 —— 使用concat
  @param arr arr
  @param k k
*/
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length == 0) {
    return arr;
  }
  const step = Math.abs(k % length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
}
// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));

//性能测试
const arr1: any[] = [];
for (let i = 0; i < 100000; i++) {
  arr1.push(i);
}
console.time("rotat1");
rotate2(arr1, 9 * 10000);
console.timeEnd("rotat1");

const arr2: any[] = [1];
for (let i = 0; i < 1000000; i++) {
  arr2.push[i];
}
console.time("rotat2");
rotate2(arr2, 9 * 10000);
console.timeEnd("rotat2");
