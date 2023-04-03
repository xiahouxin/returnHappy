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