function foo() {
  console.log(this.name);
}

var name = '海涛'

var obj = {
  name: '国强',
  fn: foo
}

var baz = obj.fn

baz()