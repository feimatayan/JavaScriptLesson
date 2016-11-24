/**
 * Created by linghang on 16/10/10.
 */
function A() {
    this.sayJ = function () {
        console.log("fff");
    }
}
A.prototype.sayHello = function () {
    console.log("sayhello");
}
A.sayHa = function () {
    console.log("sayHa");
}
var a = new A();
a.sayHello();
A.sayHa();

function B() {

}
B.prototype = new A();
var b = new B();
b.sayHello();
b.sayJ();