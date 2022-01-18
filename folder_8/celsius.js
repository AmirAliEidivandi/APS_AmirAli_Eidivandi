// celsius to farenhite
function celsiusToFarenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return `${celsius}°C is ${fahrenheit}°F`;
}
console.log(celsiusToFarenheit(32));
// 32°C is 89.6°F

// with for loop
function finMax(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr % 2 === 0) {
            newArr.push(curr);
        }
    }
    return Math.max(...newArr);
}

console.log(finMax([20, 40, 200])); // 200
console.log(finMax([20, 40, 200, 301])); // 200

// with for loop capital string
function trasforming(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (curr !== curr.toLowerCase()) {
            result += curr.toLowerCase();
        } else {
            result += curr.toUpperCase();
        }
    }
    return result;
}

console.log(trasforming("amirali"));

function triple(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}
console.log(triple(10, 12));

// multipleOrNot
function multipleOrNot(n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return false;
    }

    function isMultiple(num) {
        return num % 7 === 0 || num % 11 === 0;
    }

    const isN1 = isMultiple(n1);
    const isN2 = isMultiple(n2);

    return Boolean(isN1 ^ isN2);
}
console.log(multipleOrNot(10, 20)); // false

//
function checkVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(checkVowels("hello world")); // 3

//
function changeCase(str) {
    const arr = str.split(" ");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const firstToUpper = arr[i].charAt(0).toUpperCase();
        const restOf = arr[i].substring(1);
        result.push(firstToUpper + restOf);
    }

    return result.join(" ");
}

console.log(changeCase("hello world")); // Hello World
