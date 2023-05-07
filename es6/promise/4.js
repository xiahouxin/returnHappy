function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('yes')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      resolve('yes')
    }, 400)
  })
}

function c() {
  setTimeout(() => {
    console.log('ccc');
  }, 500)
}

// a().then(b).then(c)
// Promise.all([a(), b()]).then(c)

// Promise.race([a(), b()]).then(c)




function mPromise(name) {
  this.name = name
  this.resolve = function() {

  }
  this.race = function() {

  }
  this.then = function() {

  }
}
let p = new mPromise('wn')
// console.log(p);

p.then()
mPromise.then()