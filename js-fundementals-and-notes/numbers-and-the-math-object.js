const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Objects
val = Math.PI; // gives pi
val = Math.E;
val = Math.round(2.8945); // rounds to nearest whole number
val = Math.ceil(2.1); // rounds up always
val = Math.floor(4.7); // rounds down always
val = Math.sqrt(64);
val = Math.abs(-30);
val = Math.pow(8, 3); // times x by itself y times
val = Math.min(2,34,543,1,43,-7);
val = Math.max(2,34,543,1,43,-7);
val = Math.random(); // gives a decimal

val = Math.random() * 10 + 1; // gives a number between 0 and 10

val = Math.floor(Math.random() * 10 + 1); // gives whole number between 0 and 10

console.log(val);