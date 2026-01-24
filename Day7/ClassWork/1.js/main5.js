//1: Prototype with Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Sheya", 25);
const p2 = new Person("Shiv", 30);

p1.greet(); // Hello, my name is Sheya
p2.greet(); // Hello, my name is Shiv

//2. Checking Prototype Chain
console.log(p1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

//3: Adding Property to Prototype
Person.prototype.country = "India";

console.log(p1.country); // India
console.log(p2.country); // India
console.log(Person.prototype.hasOwnProperty("country")); // true
console.log(p1.hasOwnProperty("country")); // false
