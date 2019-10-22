// tied with index7

// // regular function
// const sayHello = function() {
//   console.log('hello');
// }

// // ARROW FUNCTION
// const sayHello = () => {
//   console.log('hello');
// }

// ONE LINE FUNCTION DOES NOT NEED BRACES
//const sayHello = () => console.log('hello');

// ONE LINE RETURNS
// const sayHello = () => 'Hello' // this only returns doesnt log so you need to log elsewhere
// console.log(sayHello()); // LOG HERE


// RETURN OBJECT
// const sayHello = () => ({ msg: 'hello'})

// SINGLE PARAM DOES NOT NEED PARENTHESIS
// const sayHello = name => console.log(`hello ${name}`);

//MULTIPLE PARAM NEEDS PARANTHESIS
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

// sayHello('Brad', 'traversy');


const users = ['Nathan', 'John', 'William'];

// REGULAR FUNCTION
// const nameLengths = users.map(function(name){
//   return name.length;
// });

//SHORTER
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//SHORTEST
const nameLengths = users.map(name => name.length)

console.log(nameLengths)