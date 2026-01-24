//1: Constructor Function
function Student(name, rollNo, course) {
  this.name = name;
  this.rollNo = rollNo;
  this.course = course;
}

const student1 = new Student("Saurav", 101, "JavaScript");
const student2 = new Student("Rahul", 102, "React");

console.log(student1.name); // Saurav
console.log(student2.name); // Rahul

//e 2: Constructor Function with Method
function Employee(id, name, department) {
  this.id = id;
  this.name = name;
  this.department = department;

  this.getDetails = function () {
    console.log(
      "ID: " +
        this.id +
        ", Name: " +
        this.name +
        ", Department: " +
        this.department,
    );
  };
}

const emp1 = new Employee(201, "Amrita", "IT");
const emp2 = new Employee(202, "Netra", "HR");

emp1.getDetails();
emp2.getDetails();
