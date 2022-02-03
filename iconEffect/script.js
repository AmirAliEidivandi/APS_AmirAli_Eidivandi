const js = document.querySelector(".javascript");
const nodejs = document.querySelector(".nodejs");
const react = document.querySelector(".react");
const html = document.querySelector(".html5");
const css = document.querySelector(".css3");

// js hover
js.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#f0db4f";
    document.body.style.transition = "all .3s ease";
});

js.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
});

// nodejs hover
nodejs.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#339933";
});
nodejs.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
});

// react hover
react.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#61dbfb";
});
react.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
});

// html hover
html.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#e44d26";
});
html.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
});

// css hover
css.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#264de4";
});
css.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
});
