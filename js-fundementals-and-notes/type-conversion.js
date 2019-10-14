// type conversion
let val;
const separate = ('===============================')

// number to string

val = String(555);
val = String(4+4);
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

//Boolean to string
val = String(true);
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

// Date to string
val = String(new Date());
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

// Array to string
val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

// toString() method | has same outcome as above examples |
val = (5).toString(); //number to string
console.log(val);
val = (true).toString(); // boolean to string
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

//---------------------------------------
// String to number
//---------------------------------------
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello') // NaN stands for not a number 
val = Number([1,2,3,4])
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

val = parseInt('100');
val = parseFloat('100.30');
console.log(val);
console.log(typeof val);

console.log(separate);
//=============================================================

//output
// console.log(val.length); | works only with strings |
console.log(val.toFixed());

