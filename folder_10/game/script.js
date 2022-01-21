const selectBox = document.querySelector('.select-box');
const selectXBtn = document.querySelector('.playerX');
const selectYBtn = document.querySelector('.playerY');
const playBoard = document.querySelector('.play-board')

window.onload = () => {
    selectBox.onclick = () => {
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
    }
}