// some arrays
const numbers = [1,2,3,4,5,6,7,8];
const numbers2 = new Array(22,54,56,345,11,34,7);
const numbers3 = new Array(12,21,120,210,52);
const fruit = ['apple', 'bannana', 'orange', 'peach',];
const mixed = [23, 'oop', true, undefined, null, {a:0, b:1}, new Date()];

let val;

//get array length | shows how many values in array |
val = numbers.length;

//check if is array;
val = Array.isArray(numbers);

// get single number | pulls a single value from the array |
val = numbers2[2];
val = numbers[0];

//insert into array | changes the position with the number wanted |
numbers[2] = 100; // replaces the second value with 100

//find index of value | finds where the value is at within the array |
val = numbers.indexOf(5);

//MUTATING ARRAYS
// adds onto end
numbers.push(200);

// adds on to front
numbers.unshift(130);

// take off value from end
numbers.pop();

// take off value from front
numbers.shift();


//splice out values |first value decides starting location, second value decides how many to splice |
numbers.splice(3,1);

//reverse array
numbers.reverse();

//concatenate array | combines two arrays |
val = numbers.concat(numbers2);

//sort arrays
val = fruit.sort(); // |strings| alphabetical order
val = numbers2.sort(); // |numbers| sorts by first character of each number

// use the 'compare function' | this can make numbers appear in order |
val = numbers2.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers2.sort(function(x, y){
  return y - x;
});

//find  | finds value fitting criteria|
function under50(num){
  return num < 50; // finds the first number under 50
}
val = numbers3.find(under50);

console.log(numbers)
console.log(val)