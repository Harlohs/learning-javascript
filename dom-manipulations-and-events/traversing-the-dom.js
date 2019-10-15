//traverse | aka moving up and down the DOM |
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes 
val = list.childNodes;//provides node list of all child nodes
val = list.childNodes[0];// gets first node
val = list.childNodes[0].nodeName;// gets first node name 
val = list.childNodes[3].nodeType; // gets node type of a certain tag

// the following are node type codes
// 1 - element
// 2 - attribute (deprecated)
// 3 - text node
// 8 - Comment
// 9 - document itself
// 10 - doctype 


// get children element nodes
val = list.children; // returns just the html collection | no extra blank lines |
val = list.children[0]; //  gets first child tag
val = list.children[1].textContent = 'hello'; //changes content

//children of children
val = list.children[3].children[0].id = 'test-link';// gets the child of a child id
val = list.children[3].children[0]; // gets child of child

//first child
val = list.firstChild; //gives first node
val = list.firstElementChild; //gives first element child

// last child
val = list.lastChild; //gives first node
val = list.lastElementChild; //gives first element child

// count child elements
val = list.childElementCount; 

//get parent node
val = listItem.parentNode;
val = listItem.parentElement.parentElement; //gets the parent element of listItems parent element

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling; // goes 2 siblings next

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;// returns null because there is no previous sibling

console.log(val);
