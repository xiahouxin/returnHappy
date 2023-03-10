 //h函数的实现核心===>写模板相当于是对h函数的调用===>h函数相当于调用createVNode方法创建虚拟dom
 export function h(
  type: any,
  propsOrChildren?: any,
  children?: any
): VNode {
  //判断形参的长度
  const l = arguments.length;
  //如果形参长度大于二说明有参数
  if (l === 2) {
    //如果是一个对象且不是一个数组的话
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      //判断VNode对象
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      //说明传递的参数是属性
      return createVNode(type, propsOrChildren);
    } else {
      //不是对象则认为是children
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    //如果参数长度大于3,截取参数
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}