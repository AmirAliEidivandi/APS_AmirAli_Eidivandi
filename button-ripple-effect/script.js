const btns = document.querySelectorAll(".btn-ripple");

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        let xCoord = e.clientX;
        let yCoord = e.clientY;

        let btnTopPos = e.target.offsetTop;
        let btnLeftPos = e.target.offsetLeft;

        let x = xCoord - btnLeftPos;
        let y = yCoord - btnTopPos;

        const span = document.createElement("span");
        span.classList.add("ripple");
        span.style.top = `${y}px`;
        span.style.left = `${x}px`;

        this.appendChild(span);

        setTimeout(() => this.removeChild(span), 500);
    });
});
