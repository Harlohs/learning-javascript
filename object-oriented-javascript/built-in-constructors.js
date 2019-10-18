// string
const name1 = 'jeff';   
const name2 = new String('Jeff'); // this constructor turns string into object 

// name2.foo = 'oof';

console.log(name2)
console.log(typeof name1); // returns string
console.log(typeof name2); // returns object

if(name1 === 'jeff'){
  console.log('yes'); // should return as yes because name1 is string
} else {
  console.log('no');
}

// if(name2 === 'jeff'){
//   console.log('yes'); 
// } else {
//   console.log('no'); // should return as no because name2 is object
// }

//==========================================================================
// other constructors

// number 
const num1 = 5;
const num2 = new Number(5); // turns number into object

// boolean
const bool1 = true;
const bool2 = new Boolean(true); //turns boolean into object

// function
const getSum1 = function(x, y){
  return x + y;
};
const getSum2 = new Function('x', 'y', 'return 1 + 1'); // uses object in function

// object
const john1 = {name: 'John'};
const john2 = new Object({name: "john"});// turns an object into an object, extremely useless
console.log(john2)

// arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);

// regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');
console.log(re2)


// most of these methods are redundent and you should stay away from them