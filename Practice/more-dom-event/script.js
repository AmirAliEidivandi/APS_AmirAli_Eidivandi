const copy = document.querySelector(".copy-me");
const head = document.createElement("h1");
const box = document.querySelector(".box");
box.appendChild(head);

copy.addEventListener("copy", () => {
    console.log("oh! cy content is copyright");
});

box.addEventListener("mousemove", (e) => {
    head.innerHTML = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
    console.log(`x: ${e.pageX} - y: ${e.pageY}`);
});
