// A instanceof B  判断A是否经过B的原型链

function instance_of(child, father) { // arr   Object
  const fp = father.prototype
  const cp = child.__proto__

  while (cp) {
    if ( cp === fp ) {
      return true
    }
    cp = cp.__proto__
  }

  return false
}