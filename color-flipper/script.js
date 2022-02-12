const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let hexCode = "#41b3a3";

const initialColor = () => {
    document.body.style.backgroundColor = hexCode;
    document.getElementById("title").textContent = hexCode;
};

const colorGenerator = () => {
    const hexArray = [];

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        hexArray.push(hex[random]);
    }

    hexCode = `#${hexArray.join("")}`;
    document.body.style.backgroundColor = hexCode;
    document.getElementById("title").textContent = hexCode;
    document.getElementById("copy").style.color = "black";
};

const copy = () => {
    const copyText = document.getElementById("title").innerHTML;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copy").style.color = hexCode;
};
