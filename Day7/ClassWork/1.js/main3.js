//4. Object Creation Using new Object()
//1: Creating an Object
const person = new Object();

person.name = "Singh";
person.age = 25;
person.city = "Delhi";

console.log(person.name); // Singh
console.log(person.age); // 25
console.log(person.city); // Delhi

//2: Object with Method
const employee = new Object();

employee.id = 101;
employee.name = "Amit";
employee.department = "IT";

employee.showDetails = function () {
  console.log(
    "ID: " +
      this.id +
      ", Name: " +
      this.name +
      ", Department: " +
      this.department,
  );
};

employee.showDetails();

//3: Accessing Object Properties
const product = new Object();

product.id = 1;
product.name = "Laptop";
product.price = 55000;

// Dot notation
console.log(product.name);

// Bracket notation
console.log(product["price"]);
