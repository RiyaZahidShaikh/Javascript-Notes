//Data Types are dynamic in JavaScript
let a;       // Now x is undefined
console.log("x is undefined",a);
a = 5;       // Now x is a Number
console.log("x is a Number",a);
a = "John";  // Now x is a String
console.log("x is a String",a);

//Boolean Data Type
let x = 5;
let y = 5;
let z = 6;
console.log(x == y)       // Returns true
console.log(x == z)       // Returns false

//JavaScript executes from left to right
let ans = 16 + 4 + "Volvo";
console.log(ans);
ans = "Volvo" + 16 + 4;
console.log(ans);