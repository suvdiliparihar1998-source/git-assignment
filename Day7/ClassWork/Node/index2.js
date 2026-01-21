//Exporting module in nodeJS

function add(a, b) {
  let sum = a + b;
  console.log(`The sum is : ${sum}`);
}

function sub(a, b) {
  let diff = a - b;
  console.log(`The diff is : ${diff}`);
}

add(10, 5);
sub(20, 5);

module.exports = {
  add,
  sub,
};
