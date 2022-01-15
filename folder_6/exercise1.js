// write a javascript program to check two numbers and return true if one the number is
// 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(20, 80)); // true
console.log(isEqualTo100(0, 100)); // true

console.log(isEqualTo100(10, 0)); // false
console.log(isEqualTo100(10, 100)); // true

console.log(isEqualTo100(50, 50)); // true
console.log(isEqualTo100(10, 40)); // false