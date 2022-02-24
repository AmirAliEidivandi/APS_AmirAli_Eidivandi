const navLinks = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");

window.onresize = () => {
    const active = document.querySelector(".active");
    underlineLink(active);
};

function underlineLink(elem) {
    const underline = document.getElementById("underline");
    underline.style.left = `${elem.offsetLeft}px`;
    underline.style.width = `${elem.offsetWidth}px`;
}

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
        navLinks.forEach((link) => link.classList.remove("active"));
        e.preventDefault();
        underlineLink(e.target);
    });
});

burger.addEventListener("click", () => {
    if (burger.classList.contains("fa-bars")) {
        burger.classList.replace("fa-bars", "fa-times");
    } else {
        burger.classList.replace("fa-times", "fa-bars");
    }
});
