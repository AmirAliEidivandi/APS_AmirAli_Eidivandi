// const user = {
//     name: 'amirali',
//     userName: 'AmirAli6578',
//     password: 'amirali123',
//     login: function(userName, password) {
//         if (userName === this.userName && password === this.password) {
//             console.log('login successfully');
//         } else {
//             console.log('Authentication Failded!');
//         }
//     }
// }

// user.login('AmirAli6578', 'amirali12')

// class
// class User {
//     #password;
//     constructor(name, userName, password) {
//         this.name = name;
//         this.userName = userName;
//         this.#password = password;
//     }

//     login(userName, password) {
//         if (userName === this.userName && password === this.#password) {
//             console.log("Login Successfully");
//         } else {
//             console.log("Authentication Failed!!");
//         }
//     }

//     setPassword(newPassword) {
//         this.#password = newPassword;
//     }
// }

// const nehal = new User("Nehal Mahida", "nehal_mahida", "password:)");
// const js = new User("JavaScript", "js", "python:)");

// nehal.login("nehal_mahida", "password:)"); // Login Successfully
// js.login("js", "python:)"); // Login Successfully

// console.log(nehal.name); // Nehal Mahida
// console.log(nehal.password); // undefined
// // console.log(nehal.#password); // Syntax Error

// nehal.setPassword("new_password:)");
// nehal.login("nehal_mahida", "password:)"); // Authentication Failed!!
// nehal.login("nehal_mahida", "new_password:)");