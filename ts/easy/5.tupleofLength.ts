//判断元组的长度
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

//ts
type Length<T extends readonly any[]> = T["length"]
//js
function getLength(arr){
  if(!Array.isArray(arr)){
    return 
  }
  return arr.length
}
//知识点
//什么是tuple类型
//tuple和普通的数组有什么区别
