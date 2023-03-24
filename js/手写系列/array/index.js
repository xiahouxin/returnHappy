// 数组方法

// toString
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.toString(); 
// console.log(newfruits);
// console.log(fruits);


// join
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.join(' && '); 
// console.log(newfruits);
// console.log(fruits);


// // join
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.pop(); 
// console.log(newfruits);
// console.log(fruits);


// // push
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.push('Kiwi'); 
// console.log(newfruits);
// console.log(fruits);


// // shift
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.shift(); 
// console.log(newfruits);
// console.log(fruits);


// // unshift
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.unshift('Lemon'); 
// console.log(newfruits);
// console.log(fruits);


// // delete
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];           // 把 fruits 中的首个元素改为 undefined
// console.log(fruits);


// // splice  splice() 方法可用于向数组添加新项：
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newfruits = fruits.splice(2, 1, "Lemon", "Kiwi");
// // let newfruits = fruits.splice(0, 1);        // 删除 fruits 中的第一个元素
// console.log(newfruits);
// console.log(fruits);
// // 第一个参数（2）定义了应添加新元素的位置（拼接）。 (必须)

// // 第二个参数（1）定义应删除多少元素。(必须)

// // 其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

// // splice() 方法返回一个包含已删除项的数组：



// // concat
// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys
// console.log(myChildren);
// // concat() 方法不会更改现有数组。它总是返回一个新数组。
// // concat() 方法可以使用任意数量的数组参数：
// // concat() 方法也可以将值作为参数：


// slice  slice() 方法用数组的某个片段切出新数组。
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1); 
console.log(fruits);
console.log(citrus);
// slice() 可接受两个参数，比如 (1, 3)。
// slice() 方法创建新数组。它不会从源数组中删除任何元素。
