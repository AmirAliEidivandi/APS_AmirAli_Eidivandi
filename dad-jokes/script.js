const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// use async/await
// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json()

//     jokeEl.innerHTML = data.joke;
// }

// use then
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };

//     fetch("https://icanhazdadjoke.com", config)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data.joke);
//             jokeEl.innerHTML = data.joke;
//         });
// }

function generateJoke() {
    axios
        .get("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        })
        .then((res) => {
            jokeEl.innerHTML = res.data.joke;
        });
}
