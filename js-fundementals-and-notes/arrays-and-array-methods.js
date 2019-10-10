// create some arrays
const numbers = [1,2,3,4,5,6,7,8];
const numbers2 = new Array(22,54,56,345,11,34,7);
const numbers3 = new Array(12,21,120,210,52);
const fruit = ['apple', 'bannana', 'orange', 'peach',];
const mixed = [23, 'oop', true, undefined, null, {a:0, b:1}, new Date()];

let val;

//get array length
val = numbers.length;

//check if is array;
val = Array.isArray(numbers);

// get single number
val = numbers2[2];
val = numbers[0];

//insert into array
numbers[2] = 100;

//find index of value
val = numbers.indexOf(5);

//MUTATING ARRAYS
//adds onto end
numbers.push(200);
// add on to front
numbers.unshift(130);
//take off from end
numbers.pop();
// take off from front
numbers.shift();

//splice out values |first value decides starting location, second value decides how many to splice |
numbers.splice(3,1);

//reverse
numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);

//sort arrays
val = fruit.sort();
val = numbers2.sort(); // sorts by first character of each number

// use the 'compare function'
val = numbers2.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers2.sort(function(x, y){
  return y - x;
});

//find
function under50(num){
  return num < 50;
}
val = numbers3.find(under50);

console.log(numbers)
console.log(val)