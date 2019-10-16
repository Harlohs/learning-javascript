// you can create an item and add it wherever needed

// creating the element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'new item');// attribute type, attribute name

//create text node and append
li.appendChild(document.createTextNode('hello world')); //append means to want to put something in something

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//-----------------------------------------------------------

//create new link element
const link = document.createElement('a');

//add classes
link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link into li
li.appendChild(link);

//-----------------------------------------------------------



console.log(li);