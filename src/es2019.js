// Array.prototype.flat() / Array.prototype.flatMap()
// Object.fromEntries()
// String.prototype.trimStart() / .trimEnd()
// Optional Catch Binding
// Function.prototype.toString()
// Symbol.prototype.description


const letters = ['a', 'b', ['c', 'd', ['e', 'f']]];
// default depth of 1
console.log(letters.flat());
// ['a', 'b', 'c', 'd', ['e', 'f']]

// depth of 2
console.log(letters.flat(2));
// ['a', 'b', 'c', 'd', 'e', 'f']

// which is the same as executing flat with depth of 1 twice
console.log(letters.flat().flat());
// ['a', 'b', 'c', 'd', 'e', 'f']

// Flattens recursively until the array contains no nested arrays
console.log(letters.flat(Infinity));
// ['a', 'b', 'c', 'd', 'e', 'f']

let greeting = ["Greetings from", " ", "Vietnam"];

// let's first try using a normal `map()` function
greeting.map(x => console.log(x.split(" ")));
// ["Greetings", "from"]
// ["", ""]
// ["Vietnam"]


greeting.flatMap(x => console.log(x.split(" ")))
// ["Greetings", "from", "", "", "Vietnam"]



//Object.fromEntries()
const keyValueArray = [
  ['key1', 'value1'],
  ['key2', 'value2']
]

const obj = Object.fromEntries(keyValueArray);
console.log(obj);
// {key1: "value1", key2: "value2"}



//String.prototype.trimStart() / .trimEnd()
let str = "    this string has a lot of whitespace   ";

str.length;
// 42

str = str.trimStart();
console.log(str);
// "this string has a lot of whitespace   "
console.log(str.length);
// 38

str = str.trimEnd();
console.log(str);
// "this string has a lot of whitespace"
console.log(str.length);
// 35



//Optional Catch Binding
// // Before
// try {
//   ...
// } catch(error) {
//   ...
// }

// // ES2019
// try {
//   ...
// } catch {
//   ...
// }


//Function.prototype.toString()

function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// function sum(a, b) {
//    return a + b;
//  }

//Symbol.prototype.description
const me = Symbol("Alberto");
console.log(me.description);
// "Alberto"

console.log(me.toString());
//  "Symbol(Alberto)"