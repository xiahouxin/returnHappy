function xq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('赖师傅相亲了！');
      resolve('ok')
    }, 2000)
  })
}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('赖师傅结婚了！');
      resolve('okok')
    }, 1000)
  })
}

function baby() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小赖出生了！');
      resolve('ok')
    }, 500)
  })
}

function baby2() {
  console.log('小小赖出生了！');
}

xq()
  .then(() => {
    return marry()
  })
  .then(() => {
    return baby()
  })
  .then(() => {
    baby2()
  })


// marry()
// baby()