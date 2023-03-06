# html中title属性和alt属性的区别？
1.<img src="#" alt="alt信息" />
//1.当图片不输出信息的时候，会显示alt信息 鼠标放上去没有信息，当图片正常读取，不会出现alt信息
2.<img src="#" alt="alt信息" title="title信息" />
//2.当图片不输出信息的时候，会显示alt信息 鼠标放上去会出现title信息
当图片正常输出的时候，不会出现alt信息，鼠标放上去会出现title信息

title属性可以用在除了base，basefont，head，html，meta，param，script和title之外的所有标签
title属性的功能是提示。额外的说明信息和非本质的信息请使用title属性。title属性值可以比alt属性值设置的更长
title属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。


# 标准盒子模型与IE怪异盒子模型
<div style="width:100px;height="100px;border:10px;padding:10px;"></div> 这个盒子在w3c标准盒子模型和IE的怪异盒子模型下面它的宽度分别是多少？
标准盒子模型：总宽度=content100px+border 10px*2+padding 10px*2 //140px
怪异盒子模型: 总宽度=content60px+ border 10px*2+padding 10px*2 //100px
ps:
box-sizing： content-box || border-box；//css3 box-sizing设置为border-box将使用怪异盒子模型
当怪异盒子的宽度小于border+padding的宽度的时候，content width将变为0，盒子的宽度会被border和padding的总宽度撑开


# ES5的继承和ES6的继承有什么区别？
ES5的继承时通过prototype或构造函数机制来实现。ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。
ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。
具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。
ps：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。

# CSS3有哪些新增的属性？
这里可以分为边框、背景，渐变，阴影、2D转换 3D转换等之类的来说。
比如：边框(border-radius、border-shadow、border-image)之类的 。
https://www.runoob.com/css3/css3-tutorial.html