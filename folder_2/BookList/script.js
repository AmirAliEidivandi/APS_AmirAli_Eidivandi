let result;

const list = document.querySelector('ul')
const li = document.querySelector('li')

// result = list.children[0].children[0].innerHTML
result = list.firstElementChild


console.log(result);

const h2 = document.createElement("h2");
// h2.classList.add('mahdi')
h2.className = "mahdi";
console.log(h2);