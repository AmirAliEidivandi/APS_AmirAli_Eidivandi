const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    xhr.responseType = 'json'
    xhr.onload = () => {
        console.log(xhr.response);
    }
    xhr.send()
}

function postData() {
    
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
