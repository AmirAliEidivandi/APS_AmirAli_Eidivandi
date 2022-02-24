// print hello world with a delay of 3 seconds
// setTimeout(console.log, 3000, 'hello world')

// create a function which receives a function as argument and executes it after 2 seconds
// function callbackExec(callback) {
//     if (typeof callback === "function") {
//         setTimeout(() => {
//             callback();
//             console.log("callback is executed after 2 seconds");
//         }, 2000);
//     }
// }

// function displayHello() {
//     console.log("hello");
// }
// callbackExec(displayHello);

// print numbers from 1 to 10 with delay of 1 second between each value being printed
// const num1 = 1,
//     num2 = 10;
// for (let i = num1; i <= num2; i++) {
//     setTimeout(console.log, 1000 * i, i);
// }

// print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval
// const num1 = 1,
//     num2 = 10;
// let i = num1;
// const intervalId = setInterval(() => {
//     console.log(i++);
//     if (i === num2 + 1) clearInterval(intervalId);
// }, 1000);

// Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times
// function timer(init = 0, step = 1) {
//     let intervalId;
//     let count = init;

//     function startTimer() {
//         if (!intervalId) {
//             intervalId = setInterval(() => {
//                 console.log(count);
//                 count += step;
//             }, 1000);
//         }
//     }

//     function stopTimer() {
//         clearInterval(intervalId);
//         intervalId = null;
//     }

//     return {
//         startTimer,
//         stopTimer,
//     };
// }

// // driver code
// const timerObj = timer(100, 10);
// timerObj.startTimer();
// setTimeout(() => {
//     timerObj.stopTimer();
// }, 5000);

// execute 3 asynchronous functions one after the other in sequence using async await

// show the wroking of promis along with resole & reject code
// function asyncResolveFunc() {
//     function resolver(resolve, reject) {
//         resolve("Success");
//     }
//     return new Promise(resolver);
// }

// function asyncRejectFunc() {
//     function resolver(resolve, reject) {
//         reject("Failure");
//     }
//     return new Promise(resolver);
// }

// // driver code
// const promiseSuccess = asyncResolveFunc()
// const promiseFailure = asyncRejectFunc()

// // succeeded promise .then executes first function passed as argument
// promiseSuccess.then(
//     (successData) => {
//         console.log(successData);
//     },
//     (failureData) => {
//         console.log(failureData);
//     }
// );

// // Failed promise .then executes second function passed as argument
// promiseFailure.then(
//     (successData) => {
//         console.log(successData);
//     },
//     (failureData) => {
//         console.log(failureData);
//     }
// );

// convert the xmlhttprequest to promise based function to get the data from the server asynchronously (fetch)
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);

//         xhr.onload = function () {
//             try {
//                 if (this.status === 200) {
//                     resolve(this);
//                 } else {
//                     reject(this);
//                 }
//             } catch (e) {
//                 reject(e);
//             }
//         };

//         xhr.onerror = function () {
//             reject(this);
//         };

//         xhr.send();
//     });
// }

// // driver code
// fetchData("https://reqbin.com/echo/get/json")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));

// make a fetch request to retrieve and store JSON data from server
// const response = fetch("https://reqbin.com/echo/get/json", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// response
//     .then((response) => {
//         const responseData = response.json();
//         responseData.then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((err) => console.log(err));

// cancel a fetch request
// const controller = new AbortController();
// let signal = controller.signal;

// fetch(url, { signal })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.warn(err);
//     });

// controller.abort();
// error: url is not defiend

// even or odd
(function () {
    var values = [3, 8, "15", Number.MAX_VALUE, Infinity, -23],
        oddValues = [],
        index,
        lenValues = values.length,
        isOdd = function (value) {
            return value % 2;
        };

    while (lenValues--) {
        if (isOdd(values[lenValues])) {
            oddValues.push(values[lenValues]);
        }
    }
    console.log(oddValues);
})();