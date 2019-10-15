// event listener

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('hello world')

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('clicked');

  let val;
  val = e;
  // the above 2 lets you look at the mouse event 

  val = e.target;// shows where the event happened
  val = e.target.id; //gets id
  val = e.target.className; // gets classes
  val = e.target.classList; // gets list of classes

  e.target.innerText = 'hello'; // changes text when event happens

  //event type
  val = e.type;

  //timestamp
  val = e.timeStamp;

  //coords event relative to the window
  val = e.clientY;
  val = e.clientX;
  //coords ralative to itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}