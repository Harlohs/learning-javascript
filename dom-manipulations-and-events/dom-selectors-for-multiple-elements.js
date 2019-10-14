// document.getElementsByClassName
const separator = ('=================================================');

let items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);// gets only first list item

items[0].style.color = 'red';
items[3].textContent = 'Hello'; // can use [] to select like an array

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


console.log(separator);
//======================================================================
// document.getElementsByTagName
// does same as above but is selecting by tag name not class
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

//convert HTML collection into array
lis = Array.from(lis);

//reverses the targetted tags I.E. lists
lis.reverse();

// needs to be turned into an array for forEach to work.
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: hello`;
});

console.log(lis);


console.log(separator);
//======================================================================
// document.querySelectorAll | creates nodelist |
items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: hello`;
});
console.log(items);

//how you select odd or even items
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = `#ccc`;
  
});
//a different way of doing the same thing as above
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'green';
}