const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dommyTransaction = [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

const addTransaction = (e) => {
    e.preventDefault();

    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please add a text and amount");
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value,
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updataValues();
        updateLocalStorage();

        text.value = "";
        amount.value = "";
    }
};

const generateID = () => {
    return Math.floor(Math.random() * 100000000);
};

const addTransactionDOM = (transaction) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;
    list.appendChild(item);
};

// update value
const updataValues = () => {
    const amounts = transactions.map((transaction) => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expence = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    moneyPlus.innerText = `$${income}`;
    moneyMinus.innerText = `$${expence}`;
};

const removeTransaction = (id) => {
    transactions = transactions.filter((transaction) => transaction.id !== id);

    updateLocalStorage()

    init();
};

// update localStorage
const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
};

const init = () => {
    list.innerHTML = "";

    transactions.forEach(addTransactionDOM);
    updataValues();
};

init();

form.addEventListener("submit", addTransaction);
