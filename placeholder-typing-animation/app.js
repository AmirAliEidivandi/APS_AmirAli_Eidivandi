let i = 0;
let placeholder = "";
const text = "amirah648887@gmail.com";

function type() {
    placeholder += text.charAt(i);
    document.getElementById("email-id").setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type, 100);
}

type();
