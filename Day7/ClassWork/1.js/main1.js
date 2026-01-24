//1. Object Literal {}
const person = {
  name: "Yash",
  age: 25,
  city: "Delhi",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person.name); // Yash
console.log(person.age); // 25
person.greet(); // Hello, my name is Yash

//2.. Using new Object()
const student = new Object();

student.name = "Yash";
student.rollNo = 101;
student.course = "JavaScript";
student.display = function () {
  console.log("Student Name: " + this.name);
};

console.log(student.name); // Yash
console.log(student.rollNo); // 101
student.display(); // Student Name: Yash

//3. Constructor Function
function Employee(name, id, department) {
  this.name = name;
  this.id = id;
  this.department = department;

  this.getDetails = function () {
    console.log(
      "Name: " +
        this.name +
        ", ID: " +
        this.id +
        ", Department: " +
        this.department,
    );
  };
}

const emp1 = new Employee("Heena", 201, "IT");
const emp2 = new Employee("Nitya", 202, "HR");

emp1.getDetails();
emp2.getDetails();
// Name: Heena, ID: 201, Department: IT
// Name: Nitya, ID: 202, Department: HR
