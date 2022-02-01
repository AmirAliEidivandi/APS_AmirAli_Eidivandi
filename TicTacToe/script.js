const btnRef = document.querySelectorAll(".button-option");
const popupRef = document.querySelector(".popup");
const newGameBtn = document.getElementById("new-game");
const restartBtn = document.getElementById("restart");
const msgRef = document.getElementById("message");

// winning pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

// player 'X' plays first
let xTurn = true;
let count = 0;

// disable buttons all
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    // enable popup
    popupRef.classList.remove("hide");
};

// enable all buttons (for new game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // disable popup
    popupRef.classList.add("hide");
};

// new game
newGameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

// this function is excuted when a players win
const winFunction = (letter) => {
    disableButtons();
    if (letter === "x") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

// function draw
const drawFunction = () => {
    disableButtons()
    msgRef.innerHTML = "&#x1F60E; <br> It's Draw";
}

// win logic
const winnChecker = () => {
    // loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [btnRef[i[0]].innerText, btnRef[i[1]].innerText, btnRef[i[2]].innerText];
        // check if elements are field
        // if 3 empty elements are same and would give win as would
        if (element1 !== "" && element2 !== "" && element3 !== "") {
            if (element1 === element2 && element2 === element3) {
                // if all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
};

// display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // display X
            element.innerText = "x";
            element.disabled = true;
        } else {
            xTurn = true;
            // dispaly Y
            element.innerText = "o";
            element.disabled = true;
        }
        // increment count on each click
        count += 1;
        if (count == 9) {
            drawFunction()
        }
        // check for win on every click
        winnChecker();
    });
});

window.onload = enableButtons;