// destructuring assignment

let a, b;
[a, b] = [100, 200];
// rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500]; // rest takes the rest of the array

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// array destructuring ========================================================

// const people = ['john', 'beth', 'mike'];

// const [person1, person2, person3] = people;

// parse array return from function ===========================================
function getPeople() {
  return ['john', 'beth', 'mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// object destructuring =======================================================

const person = {
  name: 'john',
  age: 23,
  city: 'LA', 
  gender: 'male',
}

// OLD ES5
// const name = person.name,
//       age = person.age,
//       city =person.city;

// NEW ES6 Destructuring
const { name, age, city } = person

console.log(person )