// SETS - Store unique values of any type

const set1 = new Set();

// add values to set

//format 1
set1.add(100);
set1.add('a string');
set1.add({name: 'john'});
set1.add(true); 


//format 2
const set2 = new Set([1, true, 'string']);


// console.log(set1);
// console.log(set2);

//get count =============================================
// console.log(set1.size);

//check for values ======================================
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'john'}));

// delete from set ======================================
set1.delete(100);

// console.log(set1);

// iterating through sets ===============================

//for..of
for(let item of set1){
  console.log(item);
}

//forEach loop
set1.forEach((value) =>{
  console.log(value);
})

// convert set to array
const setArr = Array.from(set1);
console.log(setArr);
