const button = document.querySelector("button");
const showMessage = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
    showMessage.style.display = "block";
});

showMessage.addEventListener("click", () => {
    showMessage.style.display = "none";
});

close.addEventListener("click", () => {
    showMessage.style.display = "none";
});
