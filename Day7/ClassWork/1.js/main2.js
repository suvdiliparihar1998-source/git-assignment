//3. Object Creation Using Object Literal {}

//
//1.Simple Object Literal
const car = {
  brand: "Venue",
  model: "Hyundai",
  year: 2019,
};

console.log(car.brand); // Venue
console.log(car.model); // Hyundai
console.log(car.year); // 2019

//2: Object Literal with Method
const user = {
  name: "Shivam",
  age: 25,
  city: "Delhi",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(user.name); // Shivam
user.greet(); // Hello, my name is Shivam

//3: Accessing Object Properties
const product = {
  id: 101,
  name: "Laptop",
  price: 55000,
};

// Dot notation
console.log(product.name);

// Bracket notation
console.log(product["price"]);
