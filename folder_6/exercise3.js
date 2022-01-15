// write a program to replace every character in a given string with the character
// following it in the alphabet

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) =>
    str
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
        .join("");

console.log(moveCharsForward("abcd"));
// bcde

console.log(moveCharsForward("bcde"));
// cdef

console.log(moveCharsForward("mnop"));
// nopq

console.log(moveCharsForward("1234"));
// 1234 => 2 3 4 5
