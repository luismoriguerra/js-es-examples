// Rest / Spread for Objects
// Asynchronous iteration
// Promise.prototype.finally()
// RegExp features
// s (dotAll) flag for regular expression
// RegExp named capture groups
// RegExp Lookbehind Assertions
// RegExp Unicode Property Escapes
// Lifting template literals restriction


//ES2018: Async Iteration and More

let myObj = {
  a:1,
  b:3,
  c:5,
  d:8,
}

// we use the rest operator to grab everything else left in the object.
let { a, b, ...z } = myObj;
console.log(a);     // 1
console.log(b);     // 3
console.log(z);     // {c: 5, d: 8}

// using the spread syntax we cloned our Object
let clone = { ...myObj };
console.log(clone);
// {a: 1, b: 3, c: 5, d: 8}
myObj.e = 15;
console.log(clone)
// {a: 1, b: 3, c: 5, d: 8}
console.log(myObj)
// {a: 1, b: 3, c: 5, d: 8, e: 15}



// Asynchronous iteration
const iterables = [1,2,3];

async function test() {
    for await (const value of iterables) {
        console.log(value);
    }
}
test();
// 1
// 2
// 3

//Promise.prototype.finally()
const myPromise = new Promise((resolve,reject) => {
  resolve();

})
myPromise
  .then(result => {
    console.log('still working');
  })
  .catch(error => {
    console.log('there was an error');
  })
  .finally(()=> {
    console.log('Done!');
  })



//RegExp features

// s (dotAll) flag for regular expression
//This introduces a new s flag for ECMAScript regular expressions that makes . match any character, including line terminators.
console.log(/foo.bar/s.test('foo\nbar'));
// true

//RegExp named capture groups
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2015-01-02');
// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';

// result[0] === '2015-01-02';
// result[1] === '2015';
// result[2] === '01';
// result[3] === '02';

let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
console.log(`one: ${one}, two: ${two}`);  
// one: foo, two: bar

