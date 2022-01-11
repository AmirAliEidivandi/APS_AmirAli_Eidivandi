// const people = [
//     { name: 'amirali', age: 20 },
//     { name: 'ali', age: 21 }
// ]
// const hasAdults = people.some((person) => person.age >= 18)

// const hasChildren = people.some((person) => person.age < 18)

// const isAmiraliPresent = people.some((person) => person.name === 'amirali')

// console.log(hasAdults); // true
// console.log(hasChildren); // false
// console.log(isAmiraliPresent); // true


// reverse a string
// const reverseString = (str) => str.split('').reverse().join('')

// console.log(reverseString("hello world amirali"));

// join an array
// const words = ['follow', 'me', 'for', 'more']
// const sentence = words.join(' ')
// console.log(words); // [ 'follow', 'me', 'for', 'more' ]
// console.log(sentence); // follow me for more

// reverse an array
// const numbers = [1, 2, 3, 4, 5];
// const sentence = numbers.reverse()
// console.log(sentence);
// [5, 4, 3, 2, 1]

// finding
// const productItem = [
//     {name: 'Book1'},
//     {name: 'Book2'},
//     {name: 'Book3'},
//     {name: 'Book4'}
// ]

// function deleteProduct(products, productName) {
//     const indexValue = products.findIndex((item) => {
//         return item.name.toLowerCase() === productName.toLowerCase()
//     })
//     if (indexValue > -1) {
//         products.splice(indexValue, 1)
//     } else {
//         console.log('product value not found');
//     }
// }

// deleteProduct(productItem, 'book2')
// console.log(productItem);
// result [ { name: 'Book1' }, { name: 'Book3' }, { name: 'Book4' } ]