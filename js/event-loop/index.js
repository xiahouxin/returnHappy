console.log(1);

setTimeout(() => {
  function a() {
    console.log(3);
  }
  a()
  console.log(4);
}, 1000)

console.log(2);