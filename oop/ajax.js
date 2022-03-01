const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

// data with ajax
// const sendHttpRequest = (method, url, data) => {
//     const response = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = "json";
//         if (data) {
//             xhr.setRequestHeader("Content-Type", "application/json");
//         }
//         xhr.onload = () => {
//             resolve(xhr.response);
//         };
//         xhr.onerror = () => {
//             reject("not found...");
//         };
//         xhr.send(JSON.stringify(data));
//     });
//     return response;
// };

// function getData() {
//     sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/todos/")
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// function postData() {
//     sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/todos/", {
//         userId: 2,
//         id: 2,
//         title: "Post Title",
//         body: "Post Body",
//     })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// getBtn.addEventListener("click", getData);
// postBtn.addEventListener("click", postData);

// data with fetch api
const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { "Content-Type": "application/json" } : {},
    }).then((res) => {
        return res.json();
    });
};
function getData() {
    sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/todos/").then((data) => {
        console.log(data);
    });
}
function postData() {
    sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/todos/", {
        userId: 2,
        id: 2,
        title: "Post Title",
        body: "Post Body",
    }).then((res) => console.log(res));
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
