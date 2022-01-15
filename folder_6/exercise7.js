// write a program to create a new string from a given string taking the first 3 characters
// and the last 3 character of a string and adding them together.
// the string length must be 3 or more, if not, the original string is returned

const makeNewString = (str) => (str.length < 3 ? str : str.slice(0, 3) + str.slice(-3));

console.log(makeNewString('abcd'));
// abcbcd

console.log(makeNewString('abcdefg234'));
// abc234

console.log(makeNewString('arwjh34'));
// arwh34

console.log(makeNewString('325fdjksh'));
// 325ksh

console.log(makeNewString('af984fe'));
// af94fe