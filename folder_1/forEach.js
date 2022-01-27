forEach and 3 parameter
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArr.forEach((item, idx, arr) => {
    console.log(item);
    console.log(idx);
    console.log(arr);
});

// 2.Access the array inside the callback
// const colors = ['blue', 'green', 'white', 'black']

// function iterate(item, index, array) {
//     console.log(item);
//     if (index === array.length - 1) {
//         console.log('The Last iteration!');
//     }
// }
// colors.forEach(iterate)

// const colors = ['blue', 'green', 'white', 'black']

// 3.index of the iterated elemnet
// function iterate(item, idx) {
//     console.log(`${item} has index ${idx}`);
// }
// colors.forEach(iterate)

// 4.forEach skips empty slots
// const sparseArray = [1, , 3];
// sparseArray.length; // => 3

// sparseArray.forEach(item => {
//     console.log(item);
// }) // logs 1, 3

// 5.false or true?
// let allEven = true;

// const numbers = [22, 3, 4, 10];
// numbers.forEach(num => {
//     if (num % 2 === 1) allEven = false;
// })
// console.log(allEven); // false

// 6.false or true
// const numbers = [22, 8, 4, 10]; // allEven true
// const numbers = [22, 3, 4, 10]; // allEven false

// const allEven = numbers.every(num => {
//     return num % 2 === 0
// })
// console.log(allEven); // true

// arrow functions have no this
let group = {
    title: "our Group",
    students: ["amirali", "zahra", "mohammadhossein", "amir"],
    showList() {
        this.students.forEach((student) => alert(`${this.title} : ${student}`));
    },
};
group.showList();
// result our groupt amirali , zahra , .....

// 100 to 1
// const range = (start, end) => (next) => start <= end && next(start++);

// const map = (iter, fn) => (next) => iter((v) => next(fn(v)));

// const reverse = (iter, _recurse) => (_recurse = (next) => iter((n) => _recurse(next) || next(n)));

// const foreach = (iter, fn) => iter((v) => fn(v) || foreach(iter, fn));

// let numbers = range(1, 10);
// numbers = map(numbers, (n) => n * n);
// numbers = reverse(numbers);
// foreach(numbers, console.log);
// res => 100, 81, 64, 49, 36, 25, 16, 9, 4, 1

// sum index array
const letter = ["a", "b", "a", "d", "c", "a", "b", "d"];

let count = []

letter.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
})
console.log(count);
// res => [a: 3, b: 2, d: 2, c:1]
