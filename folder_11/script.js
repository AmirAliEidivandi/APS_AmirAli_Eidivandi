// const num = 5;
// const num2 = -4;
// const num3 = 'hello'

// let res = Math.sqrt(num);
// let res2 = Math.sqrt(num2);
// let res3 = Math.sqrt(num3);
// console.log(`the square root of ${num} is ${res}`);
// console.log(`the square root of ${num2} is ${res2}`);
// console.log(`the square root of ${num3} is ${res3}`);

const side = 23;
const side2 = 543;
const side3 = 872;

const s = (side + side2 + side3) / 2;

const areaValue = Math.sqrt(s * (s - side) * (s - side2) * (s - side3));

console.log(`the area of the triangle is ${areaValue}`);
