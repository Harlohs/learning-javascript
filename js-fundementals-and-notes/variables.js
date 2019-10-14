// var, let, const
// var and let are the same but let is better for security reasons
// const is meant for variables that will be constantly the same

// var name= "john doe";
// let name= "john doe";
// console.log(name);
// name = "steve smith";
// console.log(name);

//-----------------------------------------------------------------------------------
// initialize variable |lets you create variable without = content |
// var greeting;
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

//-----------------------------------------------------------------------------------
// // letters, numbers, _, $,
// // above are only characters allowed in variables
// // can NOT start with number

//-----------------------------------------------------------------------------------
// // Multi word var
var firstName = 'john';   //camelCase
var first_name = 'sarah'; //underscore
var FirstName = 'jeff';   //PascalCase
var firstname = 'elk';    //allundercase

//-----------------------------------------------------------------------------------
// let is same as var on global level but has some benefits and should be used instead of var

// LET
let name= "john doe";
console.log(name);
name = "steve smith";
console.log(name);

// CONST
const name = 'john';
console.log(name);
// can not reassign
name = 'sarah';

//Have to assign a value immediately, so no initializing
// const greeting; | THIS DOESNT WORK |

//-----------------------------------------------------------------------------------
// this will be discussed more later | its referred to as object literal |
const person = {
  name: 'john',
  age: 30,
}
// the const persons objects variables can be changed 
person.name = 'sarah';
person.age = 32;
// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);