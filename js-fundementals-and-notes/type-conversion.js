// type conversion

let val;

// number to string
val = String(555);
val = String(4+4);

//Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString() method
val = (5).toString(); //number to string
val = (true).toString(); // boolean to string

//---------------------------------------
// String to number
//---------------------------------------
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello') // NaN stands for not a number 
val = Number([1,2,3,4])

val = parseInt('100');
val = parseFloat('100.30');


//output
console.log(val);
console.log(typeof val);
// console.log(val.length); | works only with strings |
console.log(val.toFixed());

