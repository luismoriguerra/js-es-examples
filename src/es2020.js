// What’s new in ES2020
// BigInt
// Dynamic Import
// Optional Chaining
// Promise.allSettled
// Nullish Coalescing
// String.protype.matchAll
// Module Namespace Exports
// import.meta
// globalThis


// 1. BigInt
let num = Number.MAX_SAFE_INTEGER
console.log(num);
// 9007199254740991
console.log(num + 1);
// 9007199254740992
console.log(num + 2);
// 9007199254740992
console.log(num + 3);
// 9007199254740994
console.log(num + 4);
// 9007199254740996

// IF YOU ARE GETTING ERRORS, RUN THIS CODE IN THE CONSOLE OF YOUR BROWSER

// let bigInt = BigInt(99999999999999999);
let bigInt = 99999999999999999n;
console.log(bigInt + 1n);
// 100000000000000000n


// 2. Dynamic Import
// if(condition1 && condition2){
//   const module = await import('./path/to/module.js');
//   module.doSomething();
// }


// 3. Optional Chaining
const user1 = {
  name: 'Alberto',
  age: 27,
  work: {
   title: 'software developer',
   location: 'Vietnam'
  }
 }
 
 const user2 = {
  name: 'Tom',
  age: 27
 }
 
 // IF YOU ARE GETTING ERRORS, RUN THIS CODE IN THE CONSOLE OF YOUR BROWSER
 if (user1.work){
  console.log(user1.work?.title);
 }
 const elon = {
  name: 'Elon Musk',
  education: {
   primary_school: { /*  primary school stuff */ },
   middle_school: { /* middle school stuff */ },
   high_school: {/* high school stuff here */},
   university: {
    name: 'University of Pennsylvania',
    graduation: {
     year: 1995
    }
   }
  }
 }
 
 const mark = {
  name: 'Mark Zuckerberg',
  education: {
   primary_school: { /*  primary school stuff */ },
   middle_school: { /* middle school stuff */ },
   high_school: {/* high school stuff here */},
   university: {
    name: 'Harvard University',
   }
  }
 }
 
 // IF YOU ARE GETTING ERRORS, RUN THIS CODE IN THE CONSOLE OF YOUR BROWSER
 
 const elonGraduationYear = elon.education.university?.graduation?.year;
 console.log(elonGraduationYear);
 // 1992
 const markGraduationYear = mark.education.university?.graduation?.year;
 console.log(markGraduationYear);
 // undefined



 // 4.Promise.allSettled

// IF YOU ARE GETTING ERRORS, RUN THIS CODE IN THE CONSOLE OF YOUR BROWSER

const arrayOfPromises = [
  new Promise((res, rej) => setTimeout(res, 1000)),
  new Promise((res, rej) => setTimeout(rej, 1000)),
  new Promise((res, rej) => setTimeout(res, 1000)),
]

Promise.allSettled(arrayOfPromises).then(data => console.log(data));

// [
//   Object { status: "fulfilled", value: undefined},
//   Object { status: "rejected", reason: undefined},
//   Object { status: "fulfilled", value: undefined},
// ]



// 5.Nullish Coalescing


// we use the !! to convert the value to boolean
const str = "";
console.log(!!str);
// false
num = 0;
console.log(!!num);
// false
const n = null;
console.log(!!n);
// false
const u = undefined;
console.log(!!u);
// false

// IF YOU ARE GETTING ERRORS, RUN THIS CODE IN THE CONSOLE OF YOUR BROWSER

const x = '' ?? 'empty string';
console.log(x);
// ''
num = 0 ?? 'zero';
console.log(num);
// 0
const n2 = null ?? "it's null";
console.log(n2);
// "it's null"
const u2 = undefined ?? "it's undefined";
console.log(u2);
// "it's undefined"



// 6. Match All
// regex that matches any character in the range from 'a' to 'd'
const regEx = /[a-d]/g;
const str2 = "Lorem ipsum dolor sit amet"
const regExIterator = str2.matchAll(regEx);

console.log(Array.from(regExIterator));
// [
//     ["d", index: 12, input: "Lorem ipsum dolor sit amet", groups: undefined]
//     ["a", index: 22, input: "Lorem ipsum dolor sit amet", groups: undefined]
// ]



// 7.import.meta
<script type="module" src="test.js"></script>
console.log(import.meta); // { url: "file:///home/user/test.js" }


// 8.globalThis

