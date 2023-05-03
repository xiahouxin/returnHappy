Car.prototype = {
  height: 1400,
  lang: 4900,
  carName:'BMW'
}

// Car.prototype.height = 1400
// Car.prototype.lang = 4900
// Car.prototype.carName = 'BMW'

function Car(color, owner) {
  this.color = color
  this.owner = owner
}

var car1 = new Car('pink', 'laisf')
var car2 = new Car('green', 'xqm')

console.log(car1);
console.log(car2.carName);