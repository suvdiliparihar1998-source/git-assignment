// Creating an object using object literal
let student = {
  name: "Yajat",
  age: 22,
  course: "JavaScript",

  // Method inside object
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
// Accessing object properties

// Using dot Operators (.)
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

//Using Subscript Operator ([])
console.log(student["course"]); // JavaScript
console.log(student["age"]); // 22
let key = "name";
console.log(student[key]); // Yajat

// Adding a Property at Runtime
student.city = "Mumbai";
console.log(student.city); // Mumbai

// Modifying a Property at Runtime
student.age = 23;
console.log(student.age); // 23
// Deleting a Property at Runtime
delete student.course;
console.log(student.course); // undefined

// Calling the method
student.greet(); // Hello, my name is Yajat

//Functions Are Objects in JavaScript
function add(a, b) {
  return a + b;
}
add.version = "1.0";
console.log("Add Function Version:", add.version); // Add Function Version: 1.0
