// const newObj = {
//     name: "amirali",
//     family: "eidivandi",
//     get age() {
//         return this.userAge;
//     },
//     set age(uAge) {
//         if (uAge < 20) {
//             throw new Error("this is a access");
//         }
//         this.userAge = uAge;
//     },
// };

// newObj.age = 30;

// console.log(newObj.age);
// console.log(newObj);

// constructor function
function SecondObj() {
    let password = "ackjfijhsjkdhf";
    this.name = "amirali";
    this.family = "eidivandi";

    this.printer = function () {
        console.log(password);
    };

    Object.defineProperties(this, {
        age: {
            get: function () {
                return this.userAge;
            },
            set: function (uAge) {
                if (uAge < 10) {
                    throw new Error("not found....");
                }
                this.userAge = uAge;
                console.log("this okay");
            },
        },
    });
}

const user = new SecondObj();
user.age = 20;
user.printer()

// function asyncFunc1(callback) {
//     console.log("Started asyncFunc1");
//     setTimeout(() => {
//         console.log("Completed asyncFunc1");
//         callback();
//     }, 3000);
// }

// function asyncFunc2(callback) {
//     console.log("Started asyncFunc2");
//     setTimeout(() => {
//         console.log("Completed asyncFunc2");
//         callback();
//     }, 2000);
// }

// function asyncFunc3(callback) {
//     console.log("Started asyncFunc3");
//     setTimeout(() => {
//         console.log("Completed asyncFunc3");
//         callback();
//     }, 1000);
// }

// function callbackManager(asyncFuncs) {
//     function nextFuncExecutor() {
//         const nextAsyncFunc = asyncFuncs.shift();
//         if (nextAsyncFunc && typeof nextAsyncFunc === "function") {
//             nextAsyncFunc(nextFuncExecutor, asyncFuncs);
//         }
//     }
//     nextFuncExecutor();
// }

// // driver code
// callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);

// const obj = {
//     _marks: 0,

//     set marks(value) {
//         if (value < 0) throw new Error("Marks cant be less than zero");
//         this._marks = value;
//     },

//     get marks() {
//         return this._marks;
//     },
// };

// console.log(obj.marks);

// function makeIterator(array) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < array.length
//                 ? {
//                       value: array[nextIndex++],
//                       done: false,
//                   }
//                 : {
//                       done: true,
//                   };
//         },
//     };
// }

// // driver code
// let it = makeIterator(["yo", "ya"]);
// console.log(it.next().value); // 'yo'
// console.log(it.next().value); // 'ya'
// console.log(it.next().done); // true

// const obj = {
//     id: 1,
//     username: "Jane",
//     dept: "Computers",

//     displayId() {
//         console.log("Id: " + this.id);
//         return this;
//     },

//     displayName() {
//         console.log("Name: " + this.username);
//         return this;
//     },

//     displayDept(dept) {
//         if (typeof dept !== "undefined") {
//             this.dept = dept;
//         }
//         console.log("Dept: " + this.dept);
//         return this;
//     },
// };

// // driver code
// obj.displayId().displayName().displayDept("Info Tech");
