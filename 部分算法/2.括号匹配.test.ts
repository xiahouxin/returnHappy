/*
  @description 括号匹配 test
  @author lbz 
*/
import { mathBracket } from "./2.判断字符串是否括号匹配";
describe("括号匹配", () => {
  it("正常情况", () => {
    const str: string = "{a(b[c]d)e}";
    const res = mathBracket(str);
    expect(res).toBe(true);
  });
  it("不匹配的情况", () => {
    const str: string = "{a(b[c)]d)e}";
    const res = mathBracket(str);
    expect(res).toBe(false);
  });
  it("顺序不一致的", () => {
    const str: string = "{a(b[c)d}e]";
    const res = mathBracket(str);
    expect(res).toBe(false);
  });
  it("空字符串", () => {
    const str: string = "";
    const res = mathBracket(str);
    expect(res).toBe(true);
  });
});
