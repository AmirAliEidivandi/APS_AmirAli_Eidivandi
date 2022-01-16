const arr = ["book1", "book2", "book3", "book4", "book5", "book6", "book7"];

// indexOf
console.log(arr.indexOf("book5"));
// 4

// forEach
arr.forEach((item) => {
    console.log(item);
});
// book1
// book2
// book3
// book4
// book5
// book6
// book7

// filter
let res = arr.filter((item) => item === "book2");
console.log(res);
// book2

// find
const arr2 = [1, 20, 32, 41, 4, 12, 62, 72, 382];
let res1 = arr2.find((item) => item > 62);
console.log(res1);
// 72

// findIndex
let res3 = arr2.findIndex((item) => item > 62);
console.log(res3);
// 7

// push
arr.push("book8");
console.log(arr);
// ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8"];

// splice
arr.splice(1, 0, "hello");
console.log(arr);
// ["book1", "hello", "book2", "book3", "book4", "book5", "book6", "book7", "book8"];

// slice
let res4 = arr.slice(2, 7)
console.log(res4);
// [ 'book2', 'book3', 'book4', 'book5', 'book6' ]

// sort
let res5 = arr2.sort()
console.log(res5);
// [1, 12, 20, 32, 382, 4, 41, 62, 72];

// every
let res6 = arr2.every(num => num > 5)
console.log(res6);
// false

// some
res6 = arr2.some(num => num > 5)
console.log(res6);
// true

const arr3 = [1, [32, 34], [[[354, 23]]], [[123]]]
let res7 = arr3.flat()
console.log(res7);
// [1, 32, 34, [[354, 23]], [123]];

// concat
res7 = arr.concat(arr2, arr3)
console.log(res7);
// ["book1", "hello", "book2", "book3", "book4", "book5", "book6", "book7", "book8", 1, 12, 20, 32, 382, 4, 41, 62, 72, 1, [32, 34], [[[Array]]], [[123]]];


// shift and unshif
arr.shift()
arr.unshift('book')
console.log(arr);
// ["book", "hello", "book2", "book3", "book4", "book5", "book6", "book7", "book8"];