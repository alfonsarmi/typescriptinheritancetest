class Thing {
constructor(detail) {
this.thingname = detail;
}
present() {
return 'I have a ' + this.thingname;
}
}
class Car extends Thing {
constructor(brand) {
super("one");
this.carname = brand;
}
present() {
return 'I have a ' + this.carname;
}
}
class Model extends Car {
constructor(brand, mod) {
super(brand);
this.model = mod;
}
show() {
return this.present() + ', it is a ' + this.model;
}
}
let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();