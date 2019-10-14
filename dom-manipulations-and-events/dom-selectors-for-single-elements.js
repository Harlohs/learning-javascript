//get element by id
//document.getElementById()

console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);// gets id
console.log(document.getElementById('task-title').className);// gets class 



//change styling | just using css within javscript |
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';
/* THIS ISNT MEANT TO BE A NEW WAY TO STYLE, ONLY USE WITHIN EVENTS dynamic functionality*/

//more efficient way to customize a class or id and other html tags
const taskTitle = document.getElementById('task-title');

// change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'my tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';