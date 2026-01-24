//7. Arrays in JavaScript
//7.1 Array Declaration
let cities = ["Apple", "Banana", "Cherry"];

//7.2 Using Array Constructor
let fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits);

//8. Iterating Arrays
//8.1 Using for Loop
for (let i = 0; i < fruits.length; i++) {
  console.log("fruits[" + i + "] = " + fruits[i]);
}
//8.2 Using for...of Loop
for (let fruit of fruits) {
  console.log("element", fruit);
}

// Array of Objects
let mobiles = [
  { model: "iPhone 14 Pro", company: "Apple", price: 89000 },
  { model: "Google Pixel 9", company: "Google", price: 92000 },
  { model: "Galaxy S25", company: "Samsung", price: 120000 },
];

for (let i = 0; i < mobiles.length; i++) {
  console.log(
    mobiles[i].model + " | " + mobiles[i].company + " | " + mobiles[i].price,
  );
}

//9.Array Operations
//9.1 push() – Add Elements at End
let names = ["Nidhi", "Riya", "Ritu"];
names.push("Riddhi");
names.push("Priyanshu", "Arnav");

console.log(names);

//9.2 splice() – Insert / Delete Elements
// Insert at index 1
names.splice(1, 0, "Sarang", "Vishal");

// Delete 1 element from index 2
names.splice(2, 1);

console.log(names);

//9.3 pop() – Remove Last Element
let removedName = names.pop();
console.log("Removed:", removedName);
console.log(names);

//9.4 at() – Access Elements (Negative Index Supported)
console.log(names.at(1)); // normal index
console.log(names.at(-1)); // last element

//9.5 filter() – Select Based on Condition
let names = ["Ridhi", "Riya", "Ritu", "Riddhi", "Priyanshu", "Arnav"];

let longNames = names.filter((name) => name.length > 5);
console.log(longNames);

//9.6 map() – Transform Each Element
let names = ["Ridhi", "Riya", "Ritu", "Riddhi"];

let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames);

//2. Array Traversal
//Forward Traversal
for (let i = 0; i < names.length; i++) {
  console.log("fwd:", names[i]);
}
//Backward Traversal/Reverse Traversal
for (let i = 0; i < names.length; i++) {
  console.log("rev:", names.at(-i - 1));
}


