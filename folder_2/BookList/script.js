const checkBox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");
const inputText = document.querySelector("#add-book input");
const addBtn = document.querySelector(".button");

const spanDelete = `<span class="delete">حذف</span>`;

addBtn.addEventListener("click", (e) => {
    const li = document.createElement("li");
    const spanName = document.createElement("span");

    spanName.className = "name";
    spanName.textContent = inputText.value;

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    storeToLocalStorage(inputText.value);

    inputText.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = localStorage.getItem("tasks").split(",");
    }

    for (let item of tasks) {
        const li = document.createElement("li");
        const spanName = document.createElement("span");

        spanName.className = "name";
        spanName.textContent = item;

        li.appendChild(spanName);
        li.innerHTML += spanDelete;

        ul.appendChild(li);
    }
});

function storeToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = localStorage.getItem("tasks").split(",");
    }

    tasks.push(task);

    localStorage.setItem("tasks", tasks);
}

checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        heading.style.display = "none";
        ul.style.display = "none";
    } else {
        heading.style.display = "block";
        ul.style.display = "block";
    }
});

// const arr = ['amirali', 'ali', 'ahmad', 'hossein', 'mohammad']

// localStorage.setItem('array', arr)

// const myArr = localStorage.getItem('array').split(',')
// console.log(myArr);

// const obj = {
//     name: 'amirali',
//     age: 20,
//     family: 'eidivandi'
// }

// localStorage.setItem('myObj', JSON.stringify(obj))
// const myObj = JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj);

// localStorage.setItem('amirali', 'eidivandi')
// localStorage.setItem('amirali2', 'eidivandi2')
// localStorage.setItem('amirali3', 'eidivandi3')

// localStorage.removeItem('amirali', 'eidivandi')

// const link = document.querySelector(".button");
// link.addEventListener('click', (e) => {
//     console.log('hello world');
//     e.preventDefault()

//     let result = e.target;
//     console.log(result);
// })

// const link = document.querySelector(".button");
// link.addEventListener('dblclick', (e) => {
//     console.log('hello world');
//     e.preventDefault()

//     let result = e.type;
//     console.log(result);
// })

// const heading = document.querySelectorAll('.title')[1];
// document.body.addEventListener('mousemove', (e) => {
//     heading.innerHTML = `mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`
// })
// console.log(heading);

// const newHeading = document.querySelector('h2')

// newHeading.className = 'title'
// newHeading.innerHTML = 'لیست کتاب ها';

// const oldHeading = document.querySelectorAll('.title')[1]

// const parentHeading = document.querySelector('#book-list')

// parentHeading.replaceChild(newHeading, oldHeading)

// const li = document.querySelectorAll('li')[2]
// const ul = document.querySelector('ul')
// ul.children[1].remove()
// console.log(ul);
// // li.remove()
// // console.log(li);

// console.log(oldHeading);

// let result;

// const list = document.querySelector("ul");
// const li = document.querySelector("li");

// result = list.children[0].children[0].innerHTML
// result = list.firstElementChild;
// result = list.lastElementChild;
// result = list.childElementCount;
// result = li.parentElement.parentElement.parentElement.parentElement;

// console.log(result);

// const container = document.createElement("div");
// const heading = document.createElement("h1");

// container.classList.add("container");
// container.className = "container";
// container.innerHTML = "hello world amirali eidiandi";
// container.appendChild(document.createTextNode('hello world amirali eidivandi'))
// heading.className = "header";
// heading.innerHTML = "hello amir";
// container.appendChild(heading);
// console.log(container);
// console.log(heading);

// const inputText = document.querySelector('#add-book input')
// const addBtn = document.querySelector('.button')

// addBtn.addEventListener('click', (e) => {
//     console.log(inputText.value);
//     inputText.value = ''
// })
