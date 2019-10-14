let val;

const today = new Date();

val = today;
val = today.toString();

//select a specific date and time | if nothing is put in the () it defaults to todays date  |
let birthday = new Date('5-3-1996 11:12:00');
birthday = new Date('may 3 1996 11:12:00');
birthday = new Date('5/3/1996 11:12:00');

val = birthday

val = today.getMonth();
val = today.getDate();
val = today.getDay(); // goes to day of week
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

console.log(val);

// you can change for all the above by using .set and placing data between ()
birthday.setMonth(2);
birthday.setDate(25);
birthday.setFullYear(1776); 


console.log(birthday);