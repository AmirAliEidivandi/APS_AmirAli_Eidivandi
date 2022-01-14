
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