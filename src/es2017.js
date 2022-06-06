// Promise review
// Async and await
// Error handling
// String padding (.padStart() and .padEnd())
// Right align with padStart
// Add a custom value to the padding
// Object.entries() and Object.values()
// Object.getOwnPropertyDescriptors()
// Trailing commas in function parameter lists and calls
// Shared memory and Atomics
// Atomics.add() & Atomics.load()
// Atomics.and(), Atomics.or() and Atomics.xor()


//ES2017: String Padding, Object.entries(), and More
console.log("hello".padStart(6));
// " hello"
console.log("hello".padEnd(6));
// "hello "
console.log("hi".padStart(10));
// 10 - 2 = 8 empty spaces
// "        hi"
console.log("welcome".padStart(10));
// 10 - 6 = 4 empty spaces
// "   welcome"
const strings = ["short", "medium length", "very long string"];

const longestString = strings.sort(str => str.length).map(str => str.length)[0];

strings.forEach(str => console.log(str.padStart(longestString)));

// very long string
//    medium length
//            short

console.log("hello".padEnd(13," Alberto"));
// "hello Alberto"
console.log("1".padStart(3,0));
// "001"
console.log("99".padStart(3,0));
// "099"

// Object.entries() and Object.values()

let family = {
  father: "Jonathan Kent",
  mother: "Martha Kent",
  son: "Clark Kent",
}
Object.keys(family);
// ["father", "mother", "son"]
family.father;
"Jonathan Kent"

family = {
  father: "Jonathan Kent",
  mother: "Martha Kent",
  son: "Clark Kent",
}
console.log(Object.values(family));
// ["Jonathan Kent", "Martha Kent", "Clark Kent"]

console.log(Object.entries(family));
// ["father", "Jonathan Kent"]
// ["mother", "Martha Kent"]
// ["son", "Clark Kent"]


// Object.getOwnPropertyDescriptors()
const myObj = {
  name: "Alberto",
  age: 25,
  greet() {
    console.log("hello");
  },
}
console.log(Object.getOwnPropertyDescriptors(myObj));
// age:{value: 25, writable: true, enumerable: true, configurable: true}

// greet:{value: ƒ, writable: true, enumerable: true, configurable: true}

// name:{value: "Alberto", writable: true, enumerable: true, configurable: true}


// ES2017: Async and Await
// fetch a user from github
fetch('api.github.com/user/AlbertoMontalesi').then( res => {
  // return the data in json format
  return res.json();
}).then(res => {
  // if everything went well, print the data
  console.log(res);
}).catch( err => {
  // or print the error
  console.log(err);
})

function walk(amount) {
  return new Promise((resolve,reject) => {
    if (amount < 500) {
      reject ("the value is too small");
    }
    setTimeout(() => resolve(`you walked for ${amount}ms`),amount);
  });
}

// create an async function
async function go() {
  // use the keyword `await` to wait for the response
  const res = await walk(500);
  console.log(res);
  const res2 = await walk(900);
  console.log(res2);
  const res3 = await walk(600);
  console.log(res3);
  const res4 = await walk(700);
  console.log(res4);
  const res5 = await walk(400);
  console.log(res5);
  console.log("finished");
}

go();

// you walked for 500ms 
// you walked for 900ms 
// you walked for 600ms 
// you walked for 700ms 
// uncaught exception: the value is too small

async function asyncFunc(){
  let response = await fetch('http:your-url');
}
asyncFunc();
// Uncaught (in promise) TypeError: Failed to fetch

asyncFunc().catch(console.log);
// TypeError: Failed to fetch