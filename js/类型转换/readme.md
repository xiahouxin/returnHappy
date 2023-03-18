# js类型转换（表） 1.js

# 一元操作符 （+ -） 2.js
+ 会默认调用ToNumber处理该值

  如果传入的是对象类型，会先调用ToPrimitive()方法，执行的步骤是：

    1. 如果obj是基本类型，就直接返回
    2. 否则，调用 valueOf 方法，如果返回一个原始值，则js将其值返回
    3. 否则，调用 toString 方法，如果返回一个原始值，则js将其值返回
    4. 否则，报类型错误
    
# 二元运算符  2.js
<!-- val1+val2 -->
1. v1=ToPrimitvie(val1)
2. v2=ToPrimitvie(val2)
3. 如果v1是字符串或者v2是字符串，那么返回 ToString(v1)和ToString(v2)的拼接结果
4. 返回ToNumber(v1)和ToNumber(v2)的拼接结果

- new Date(2021,11,20)跳过valueOf()


# null和数组  3.js


# == 相等  3.js

x == y
如果x y是同一类型
1. x是 undefined，返回true
2. x是null,返回true
3. ...
4. x是对象，y是字符串或者数字，ToPrimitive(x)==y
5. null==undefined  //true
6. NaN==NaN  //false


# 布尔值和其他类型  3.js

1. 当一方出现布尔值时，就会对这一方的值进行 ToNumber()处理





