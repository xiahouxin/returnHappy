function $attr(key, value) {
    let elements = document.getElementsByTagName("*"),
      arr = [];
    //   [].forEach.call(elements,item=>{})
    elements = Array.from(elements);
    elements.forEach((item) => {
      //=>存储的是当前元素key对于的属性值
      let itemValue = item.getAttribute(key);
      if (itemValue === value) {
        arr.push(item);
      }
    });
    return arr;
  }
  console.log($attr("class", "box"));