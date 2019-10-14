const firstName = 'william';
const lastName = 'Johnson';
const age = 32;
const str = "hello my friend I am Harlee";
const tags = " tag1, tag2, tag3, tag4, tag5";

let val;

val = firstName + lastName;

// concatenation | the linking of variables |
val = firstName + ' ' + lastName;

// Append aka += | a different way to concatenate|
val = 'example1 ';
val += 'example2';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping | using a \ before ' to make it not interact with 'string'|
val = 'That\'s awesome, I can\'t wait';

//length | counts number of characters in string |
val = firstName.length;

//concat | using a method to concatenate |
val = firstName.concat(' ', lastName)

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//select single character | allows you to pick 1 character from a string|
val = firstName[0];

//indexOf() | finds the character and indexes it|
val = firstName.indexOf('l'); // finds first L which is 2 characters in
val = firstName.lastIndexOf('l'); // finds last L which is 3 characters from end

//charAt | does opposite of index and finds the character based on number given |
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length - 1);

//substring() | pulls a substring out of a string |
val = firstName.substring(0, 4); // the substring would be Will because firstName is William

//slice() | mostly used with arrays to do the same as substring |
val = firstName.slice(0, 5);
val = firstName.slice(-3); // when used as a negative number it starts from the back

//split() | splits string into  an array based on a separator |
val = str.split(' '); // every space splits the variable into another array
val = tags.split(','); // every , splits the variable into another array

//replace | replaces part of a string with something else |
val = str.replace('Harlee', 'Goober'); // replaces harlee with goober

//includes | tests for whats in a string, gives a true false statement |
val = str.includes('ammend')

console.log(val);