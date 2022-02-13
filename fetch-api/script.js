// const api = axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// console.log(api);

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        response.json();
    })
    .catch((err) => {
        console.log(err);
    });
