// What’s new in ES2021
// String.prototype.replaceAll
// Promise.any
// Logical Operators and Assignment Expressions
// Numeric Separators
// WeakRefs
// Intl.ListFormat
// dateStyle and timeStyle options for Intl.DateTimeFormat

// 1. String.prototype.replaceAll
const str = "I like my dog, my dog loves me";
const newStr = str.replaceAll("dog", "cat");
console.log(newStr);
// "I like my cat, my cat loves me"


// 2. Promise.any
// example taken from: https://github.com/tc39/proposal-promise-any
Promise.any(promises).then(
  (first) => {
    // Any of the promises was fulfilled.
  },
  (error) => {
    // All of the promises were rejected.
  }
);


// 3. Logical Operators and Assignment Expression
a ||= b;
// equivalent to a = a || b

c &&= d;
// equivalent to c = c && d

e ??= f;
// equivalent to e = e ?? f


// 4.Numeric Separators
x = 100_000;
// 100 thousand

dollar = 55_90;
// 55 dollar 90 cents

fraction = 0.000_1;
// 1 thousandth


// 5.Intl.ListFormat
const list = ["Apple", "Orange", "Banana"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list
  )
)
// Apple, Orange and Banana
console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list
  )
)
// Apple, Orange or Banana

list = ["Apple", "Orange", "Banana"];

// Italian
console.log(
  new Intl.ListFormat("it", { style: "long", type: "conjunction" }).format(list)
);
// Apple, Orange e Banana

// Spanish
console.log(
  new Intl.ListFormat("es", { style: "long", type: "conjunction" }).format(list)
);
// Apple, Orange y Banana

// German
console.log(
  new Intl.ListFormat("de", { style: "long", type: "conjunction" }).format(list)
);
// Apple, Orange und Banana


// 6. dateStyle and timeStyle options for Intl.DateTimeFormat

// short
console.log(
  new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  }).format(Date.now())
)
// "2:45 PM"

// medium
console.log(
  new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
  }).format(Date.now())
)
// "2:45:53 PM"

// long
console.log(
  new Intl.DateTimeFormat("en", {
    timeStyle: "long",
  }).format(Date.now())
)
// "2:46:05 PM GMT+7"
// short
console.log(
  new Intl.DateTimeFormat("en", {
    dateStyle: "short",
  }).format(Date.now())
)
// "7/25/20"

// medium
console.log(
  new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(Date.now())
)
// "Jul 25, 2020"

// long
console.log(
  new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  }).format(Date.now())
)
// "July 25, 2020"
