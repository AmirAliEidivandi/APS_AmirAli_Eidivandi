const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

const sendHttpRequest = (method, url) => {
    const response = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.onerror = () => {
            reject("not found...");
        };
        xhr.send();
    });
    return response;
};

function getData() {
    sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/todos/")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function postData() {}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
