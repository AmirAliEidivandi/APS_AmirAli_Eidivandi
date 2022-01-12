// Create an array of objects with only people whose age is between 30 and 50
function solution(inputArray) {
    // your code
    return inputArray.filter(array => array > 30 && array < 50)
}

console.log(solution([10, 20, 40, 53, 23, 32, 43, 12]));
// result [ 40, 32, 43 ]

// odd to new array
function solution2(inputArray) {
    const newArr = inputArray.filter(input => input % 3 === 1)
    return newArr
}
console.log(solution2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));