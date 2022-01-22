const contextMenu = document.querySelector(".wrapper");
const shareMenu = document.querySelector(".share-menu");

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;
    let windWidth = window.innerWidth;
    let windHeight = window.innerHeight;
    let cmWidth = contextMenu.offsetWidth;
    let cmHeight = contextMenu.offsetHeight;

    if (x > windWidth - cmWidth - shareMenu.offsetWidth) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    x = x > windWidth - cmWidth ? windWidth - cmWidth - 5 : x;
    y = y > windHeight - cmHeight ? windHeight - cmHeight - 5 : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => (contextMenu.style.visibility = "hidden"));
