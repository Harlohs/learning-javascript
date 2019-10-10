// var, let, const

// var name= "john doe";
// console.log(name);
// name = "steve smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

// // letters, numbers, _, $,
// // above are only characters allowed in variables
// // can NOT start with number

// // Multi word var
// var firstName = 'john'; //camelCase
// var first_name = 'sarah'; //underscore
// var FirstName = 'jeff'; //PascalCase
// var firstname = 'elk'; // allundercase

// let is same as var on global level but has

// // LET
// let name= "john doe";
// console.log(name);
// name = "steve smith";
// console.log(name);

// CONST
const name = 'john';
console.log(name);
// can not reassign
// name = 'sarah';

//Have to assign a value
// const greeting; XXX

const person = {
  name: 'john',
  age: 30
}

person.name = 'sarah';
person.age = 32;
// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);