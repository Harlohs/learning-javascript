const firstName = 'william';
const lastName = 'Johnson';
const age = 32;
const str = "hello my friend I am Harlee";
const tags = " tag1, tag2, tag3, tag4, tag5";

let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// Append aka +=
val = 'example1 ';
val += 'example2';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping | using a \ before ' to make it not interact with 'string'|
val = 'That\'s awesome, I can\'t wait';

//length 
val = firstName.length;

//concat
val = firstName.concat(' ', lastName)

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//select single character
val = firstName[0];

//indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

//charAt
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 5);

//slice()
val = firstName.slice(0, 5);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',')

//replace
val = str.replace('Harlee', 'Goober');

//includes | tests for whats in a string |
val = str.includes('ammend')

console.log(val);