//Array.prototype.includes()
let array = [1,2,4,5];

console.log(array.includes(2));
// true
console.log(array.includes(3));
// false

array = [1,3,5,7,9,11];

console.log(array.includes(3,1));
// find the number 3 starting from array index 1
// true
console.log(array.includes(5,4));
//false
console.log(array.includes(1,-1));
// find the number 1 starting from the ending of the array going backwards
// false
console.log(array.includes(11,-3));
// true

// The exponential operator 
console.log(2**2);
// 4
console.log(2**3);
// 8
console.log(2**2**2);
// 16
console.log(Math.pow(Math.pow(2,2),2));
// 16

