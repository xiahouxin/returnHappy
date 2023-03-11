/*
 *@description Array rotate test
 *@author lbz
 */
import { rotate1, rotate2 } from "./1.将一个数组旋转k步";
//@ts-ignore
describe("数组选择", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
  it("数组为空", () => {
    const arr: number[] = [];
    const k = 3;
    const res = rotate2(arr, k);
    expect(res).toEqual([]);
  });
  it("k是负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;
    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
  it("k不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    //@ts-ignore
    const res = rotate2(arr, k);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it("k是0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    //@ts-ignore
    const res = rotate2(arr, k);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
