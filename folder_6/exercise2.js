// write a program to get the extension of a fileName.

const getExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getExtension('index.html'));
// .html

console.log(getExtension('webpack.config.js'));
// .js

console.log(getExtension('tailwind.config.js'));
// .js