// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");

// console.log(map.get("1"));
// console.log(map.get(1));
// console.log(map.size);

// =======================================
// let amirali = { name: "amirali" };

// let visitsCountMap = new Map();

// visitsCountMap.set(amirali, 123);

// console.log(visitsCountMap.get(amirali));

// ========================================
// let amirali = { name: "amirali" };
// let ben = { name: "ben" };

// let visitsCountObj = {};

// visitsCountObj[ben] = 234;
// visitsCountObj[amirali] = 123;

// console.log(visitsCountObj["[object Object]"]);

// =========================================
// let map = new Map();

// map.set("1", "str1").set("2", "str2").set("3", "str3");

// console.log(map);

// =========================================
// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomatoes", 350],
//     ["onion", 50],
// ]);

// // iterate over for each recipe
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// })

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//     console.log(amount);
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) {
//     console.log(entry);
// }

// =====================================
// const obj = {
//     name: 'amirali',
//     age: 18
// }

// let map = new Map(Object.entries(obj));
// console.log(map.get('name'));

// ======================================
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4],
// ])

// console.log(prices.orange);

// set ==================================
// let set = new Set();

// let amirali = { name: "amirali" };
// let prime = { name: "prime" };
// let prime2 = { name: "prime2" };

// set.add(prime);
// set.add(prime2);
// set.add(amirali);
// set.add(prime);
// set.add(amirali);

// console.log(set.size);

// for (let user of set) {
//     console.log(user.name);
// }

// iterate over set =============================
// let set = new Set(['oranges', 'apples', 'banana']);

// // with for loop
// for (let value of set) console.log(value);

// // with forEach
// set.forEach(value => console.log(value))

// task ==========================================
function unique(arr) {
    // your code
    return Array.from(new Set(arr));
}

let values = ["hare", "krishna", "hare", "krishna", "krishna", "krishna", "hare", "hare", ":-O"];

console.log(unique(values));
