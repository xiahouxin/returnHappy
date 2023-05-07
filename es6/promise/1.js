// js是单线程语言

function a() {
  console.log('老汪');
}

function b() { // 异步
  setTimeout(() => {
    console.log('欧阳');
  }, 1000)
}

function c() {
  console.log('阿里胡');
}

b()
a()
c()