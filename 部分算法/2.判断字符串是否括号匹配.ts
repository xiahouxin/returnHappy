/* 
 @description 括号匹配
 @author lbz
*/

/*  
 @param str str
*/

/* 
  @param left 左括号
  @param right 右括号
*/
function isMatch(left: string, right: string) {
  if (left === "{" && right === "}") return true;
  if (left === "[" && right === "]") return true;
  if (left === "(" && right === ")") return true;
}
export function mathBracket(str: string) {
  const length = str.length;
  if (length === 0) return true;
  const stack = [];

  const leftSymbols = "{[(";
  const rightSymbols = "}])";
  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftSymbols.includes(s)) {
      //左括号,压栈
      stack.push(s);
    } else if (rightSymbols.includes(s)) {
      //判断栈顶是否出栈
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

//功能测试

const str = "{a(b[c)]d)e}";
console.log(mathBracket(str));



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s:string) {
  let map=new Map()
  let arr=[]
  arr.push('?')
  map.set('(',')').set('{','}').set('[',']')
  for(let i=0;i<s.length;i++){
      if(!map.has(s[i])){
          if(map.get(arr[arr.length-1])!=s[i]){
              return false;
          }else{
              arr.pop()
          }
      }else{
          arr.push(s[i])
      }
  }
  return arr.length==1
};
