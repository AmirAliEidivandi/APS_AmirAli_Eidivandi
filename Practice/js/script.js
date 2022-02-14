// let range = {
//     from: 1,
//     to: 5,
// };

// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return {
//                     done: false,
//                     value: this.current++,
//                 };
//             } else {
//                 return { done: true };
//             }
//         },
//     };
// };

// for (let num of range) {
//     console.log(num);
// }

// =====================================================
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
}

let str = "X😂";

console.log(slice(str, 1, 3));
console.log(str.slice(1, 3));
