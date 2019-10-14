// if(something){
//   do something 
// } else {
//   do something else
// }
const separator = ('________________________');
const id = 100;


// EQUAL TO VALUE | numbers can equal string of that is the same nummber |
if( id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO | ! means not equal |
if( id != 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE AND TYPE 
if( id === '100'){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE AND TYPE 
if( id !== '100'){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

//---------------------------------------------------
console.log(separator);

//const idTest = 100;

//test if undefined 
if(typeof idTest !== 'undefined'){
  console.log(`the ID is ${id}`);
} else {
  console.log('NO ID');
}

//---------------------------------------------------
console.log(separator);


//GREATER OR LESS THAN
if( id > 200){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if( id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// >= greater than or equal to
// <= less than or equal to

//---------------------------------------------------
console.log(separator);


//IF ELSE | if blank is equal to blank else then other blank|
const color = 'red';

if(color === 'red'){
  console.log('color is red');
} else if(color === 'blue'){
  console.log('color is blue');
} else {
  console.log('color is not red or blue');
}

//LOGICAL OPERATORS
// use && to set multiple stipulations for each if else statements
// AND = &&
const name = "steve";
const age = 20;

if(age > 0 && age < 12){ //age greater than 0 AND age is less than 12
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else  {
  console.log(`${name} is an adult`);
}

// OR = ||
if (age < 16 || age > 65){ // age LESS than 16 OR age GREATER than 65
  console.log(`${name} can't run in race`);
} else {
  console.log(`${name} can run in the race`);
}
//---------------------------------------------------
console.log(separator);

// TERNARY OPERATOR | shorthand way of doing conditionals |
console.log(id === 100 ? 'correct' : 'incorrect');

//NOTE
// you can do if else statememnts WITHOUT {} but its not recommended