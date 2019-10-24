// create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

//console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${String(sym1)}`);

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// console.log(myObj[KEY2]);

// symbols are not enumberable in for...in 
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));