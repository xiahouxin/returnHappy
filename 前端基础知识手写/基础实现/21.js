function createNewNode(vnode) {
    let tag = vnode.tag; //目标元素
    let attr = vnode.attr || {}; //目标属性
    let children = vnode.children || {}; //目标的孩子
    if (!tag) {
      return null;
    }
    //创建dom
    let ele = document.createElement();
    let attrName;
    //给dom添加元素
    for (attrName in attr) {
      if (attr.hasOwnProperty(attrName)) {
        ele.setAttribute(attrName, attr[attrName]);
      }
    }
    //将子元素添加到dom上
    children.forEach((children) => {
      ele.appendChild(createNewNode(children));
    });

    return ele;
  }


  //简单实现vue的更新方法，递归实现
  function update(vNode, newNode) {
    let children = vNode.children || {};
    let newChildren = newNode.children || {};
    children.forEach((childrenVnode, index) => {
      let newChildrenVnode = newChildren[index];
      if (childrenVnode.tag == newChildrenVnode.tag) {
        update(childrenVnode, newChildrenVnode);
      } else {
        replace(childrenVnode, newChildrenVnode);
      }
    });
  }