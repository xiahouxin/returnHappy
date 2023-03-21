// 字符串方法


// // // indexOf
// var str = "The full name of China is the People's Republic of China.";
// var pos = str.indexOf("China");
// console.log(pos);


// // lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引：
// var str = "The full name of China is the People's Republic of China.";
// var pos = str.lastIndexOf("China");
// 如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1。


// // slice() 方法
// // slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。
// // 该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。
// var str = "Apple, Banana, Mango";
// var res1 = str.slice(7,13);
// var res2 = str.slice(-13,-7);
// console.log(str.length);
// console.log(res1,res2);
// console.log(str);



// // substring() 方法
// // substring() 类似于 slice()。
// // 不同之处在于 substring() 无法接受负的索引。
// var str = "Apple, Banana, Mango";
// var res = str.substring(7,13);



// substr() 方法
// substr() 类似于 slice()。
// 不同之处在于第二个参数规定被提取部分的长度。
// var str = "Apple, Banana, Mango";
// var res = str.substr(7,6);
// console.log(res);
// console.log(str);
// // 如果首个参数为负，则从字符串的结尾计算位置。
// var res2 = str.substr(-5);
// console.log(res2);



// // 替换字符串内容
// // replace() 方法用另一个值替换在字符串中指定的值：
// str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "W3School");
// console.log(n);
// // replace() 方法不会改变调用它的字符串。它返回的是新字符串。
// // 默认地，replace() 只替换首个匹配：



// // concat() 方法
// // concat() 连接两个或多个字符串：
// var text1 = "Hello";
// var text2 = "World";
// text3 = text1.concat(" ",text2);
// console.log(text3);



// // String.trim()
// // trim() 方法删除字符串两端的空白符：
// var str = "       Hello World!        ";
// alert(str.trim());



// // charAt() 方法
// // charAt() 方法返回字符串中指定下标（位置）的字符串：
// var str = "HELLO WORLD";
// str.charAt(0);            // 返回 H



// // charCodeAt() 方法
// // charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码：
// var str = "HELLO WORLD";
// str.charCodeAt(0);         // 返回 72



// 把字符串转换为数组
// 可以通过 split() 将字符串转换为数组：
var txt = "a,b,c,d,e";   // 字符串
// txt.split(",");          // 用逗号分隔
// txt.split(" ");          // 用空格分隔
console.log(txt.split("|"));          // 用竖线分隔