// function checkOut(...price) {
//     let sum = 0;
//     price.forEach(item => sum += item)
//     return sum;
// }

// console.log(checkOut(10, 100, 329, 4329, 32));

function cartDetails(userName, price, ...products) {
    console.log(`usrname: ${userName}`);
    console.log(`price: ${price}`);
    console.log(`products: ${products.join(', ')}`);
}

cartDetails('amirali', 100, 'book1', 'book2', 'book3')