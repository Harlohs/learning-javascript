// REPLACE ELEMENTS

//create element
const newHeading = document.createElement('h2');

//add id
newHeading.id = 'task-title';

//new text node
newHeading.appendChild(document.createTextNode('task list'));

//get old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

//-----------------------------------------------------------------

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val

// classes
val = link.className;
val = link.classList;// gives dom token list not array
val = link.classList[0];
link.classList.add('test');// adds class to element
link.classList.remove('test');// removes class from element
val = link;


//attribute
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title'); // tests if attribute exists
link.removeAttribute('title');

console.log(val);