// show the execution of 3 asynchronous block of code, one after the other in sequence
// function asyncFunc() {
//     console.log("Started asyncFunc1");
//     //Async1 code
//     setTimeout(() => {
//         console.log("Completed asyncFunc1");
//         console.log("Started asyncFunc2");
//         //Async2 code
//         setTimeout(() => {
//             console.log("Completed asyncFunc2");
//             console.log("Started asyncFunc3");
//             //Async3 function code
//             setTimeout(() => {
//                 console.log("Completed asyncFunc3");
//             }, 1000);
//         }, 2000);
//     }, 3000);
// }

// asyncFunc();

// write a function wich can concatenate 2 arrays. if only one array is passed it will deuplicate it.
// function mergeArray(arr1, arr2 = arr1) {
//     arr1.push(...arr2);
//     console.log(arr1);
// }
// mergeArray([1, 2, 3, 4, 5], [1, 2, 3])

// write a code to generate an array with range of numbers and shuffle them
function rangeFenFunc(start = 1, end = 0) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    console.log(arr);
}

const arr = rangeFenFunc(1, 10);
arr.sort(() => 0.5 - Math.random());
// BUG: