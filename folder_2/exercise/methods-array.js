// let arr = [1, 2, 3, 4, 5]

// arr.shift()
// arr.push(20)
// arr.unshift(15)
// console.log(arr);
// result [ 15, 2, 3, 4, 5, 20 ]

// remove first and last index in array
// let arr = [1, 2, 3, 4, 5]
// arr.shift()
// arr.pop()
// console.log(arr);

// concat and remove first index arrTwo
// let arrOne = [1, 3, 5, 7, 9];
// let arrTwo = [2, 4, 6, 8, 10];

// arrTwo.shift();
// let arrThree = arrOne.concat(arrTwo);
// console.log(arrThree);
// result => [1, 3, 5, 7, 9, 4, 6, 8, 10];

// remove
// let arr = [1, 3, 4, 7, 11, 18];

// arr.splice(0, 0, 0, 10)
// arr.splice(0, 2)
// console.log(arr);
// res => [1, 3, 4, 7, 11, 18]

// true or false?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEvenNumber(num) {
//     return num % 2 === 0;
// }

// function isOddNumber(num) {
//     return num % 2 === 1;
// }

// let booleanOne = arr.every(isEvenNumber) && arr.some(isOddNumber);
// let booleanTwo = arr.some(isEvenNumber) && arr.every(isOddNumber);

// console.log(booleanOne);
// console.log(booleanTwo);
// false and false

// filter nums
// let arr = [1, 2, 9, 16, 25, 36, 49, 64, 81, 100];

// function isDiivisibleByFive(num) {
//     return num % 5 === 0;
// }

// arr = arr.filter(isDiivisibleByFive);
// let squares = arr.map((num) => num * num);

// console.log(squares);
// result => [ 625, 10000 ]

// forEach
// let arr = [1, 1, 2, 3, 5, 8, 11];
// let sum = 20;
// arr.forEach(item => sum += item)
// console.log(sum);
// result => 51

// let arr = [1, 2, 3, 4, 3, 3, 33, 5, 3, 2];
// console.log(arr.lastIndexOf(3, 7));

// let arr = [2, 4, 8, 16, 32];
// arr.reverse()
// arr = arr.slice(1, 3)
// console.log(arr);



// let arr = [5, 25, 125, 625, 3125, 15625];

// function isOdd(num) {
//     return num % 2 === 1;
// }

// function divide(num) {
//     return num / 25
// }

// console.log(arr.filter(isOdd).map(divide));
// res => [ 0.2, 1, 5, 25, 125, 625 ]